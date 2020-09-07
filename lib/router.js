import Router from "vue-router";
const conf = require("./nuxt.config").default.buildModules
// get the domains from the nuxt.config.js
let subdomains; 
conf.forEach(config => {
  if (config[0] == "k-domains") {
    //   add the subdomains and rootdomain in the array
    subdomains = [...config[1].subdomains, config[1].rootDomain];
    return
  }
})

// console.log(domains);
export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions || createDefaultRouter(ssrContext).options;

  let routesDirectory = null;

  if (process.server && ssrContext && ssrContext.nuxt && ssrContext.req) {
    const req = ssrContext.req;
    // get the subdomain from the request host
    const matcher = req.headers.host.match(/^(\w+)\.(localhost|\w+)(\.\w+)?/) || ["root-domain"];
    routesDirectory = matcher[1] || matcher[0];
    // if the subdomain is not in the list of user provided domains, set the rootdirectory to root - domain given by the user
    routesDirectory = subdomains.includes(routesDirectory) ? routesDirectory : subdomains[subdomains.length - 1];
    // console.log(routesDirectory);
    // Save to the object that will be sent to the client as inline-script
    ssrContext.nuxt.routesDirectory = routesDirectory;
  }
  if (process.client) {
    // Get what we saved on SSR
    if (window.__NUXT__ && window.__NUXT__.routesDirectory) {
      routesDirectory = window.__NUXT__.routesDirectory;
      // console.log(`routes dir ${routesDirectory}`);
    }
  }

  function isUnderDirectory(route, directory) {
    let isUnderDir = false;
    const path = route.path;
    if (typeof directory == "object") {
      directory.map(dir => {
        if(path === "/" + dir || path.startsWith("/" + dir + "/")){
          isUnderDir = true
        }
      })
      return isUnderDir;
    } else {
      return path === "/" + directory || path.startsWith("/" + directory + "/");
    }
  }

  let newRoutes = options.routes;
  // console.log("old routes");
  // console.log(options.routes);
  if (routesDirectory) {
    newRoutes = options.routes
      .filter(route => {
        // remove routes from other directories
        const toRemove = subdomains.filter(domain => {
          return domain != routesDirectory
        })
        // console.log("toRemove : ", toRemove, "routesDirectory : ", routesDirectory, "domains : ", domains);
        return !isUnderDirectory(route, toRemove);
      })
      .map(route => {
        // remove directory from path and name
        if (isUnderDirectory(route, routesDirectory)) {
          return {
            ...route,
            path: route.path.substr(routesDirectory.length + 1) || "/",
            name: route.name.substr(routesDirectory.length + 1) || "index"
          };
        }
        return route;
      });
  }

  console.log("new routes");
  console.log(newRoutes);
  return new Router({
    ...options,
    routes: newRoutes
  });
}
