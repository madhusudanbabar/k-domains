// router.js
import Router from "vue-router";
const n = require( "./nuxt.config").default.modules;

// console.log(n);
var opt;
n.map((mod) => {
  if(mod instanceof Array && mod[0] === "k-router" ){
    opt = mod;
    return
  }
})

const domains = opt[1].subdomains
// console.log(domains);

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions || createDefaultRouter(ssrContext).options;
  // console.log(this);

  let routesDirectory = null;

  if (process.server && ssrContext && ssrContext.nuxt && ssrContext.req) {
    const req = ssrContext.req;

    //  todo: for better clarity change domainLevel to domainName
    console.log(domains.includes(req.headers.host));

    // routesDirectory = domainLevel > 1 ? "sub-domain" : "root-domain";
    // TODO: create a regex to get subdomain from url
    routesDirectory = req.headers.host;

    console.log(routesDirectory +"dir");
    // Save to the object that will be sent to the client as inline-script
    ssrContext.nuxt.routesDirectory = routesDirectory;
  }
  if (process.client) {
    // Get what we saved on SSR
    if (window.__NUXT__ && window.__NUXT__.routesDirectory) {
      routesDirectory = window.__NUXT__.routesDirectory;
    }
  }

  function isUnderDirectory(route, directoryArr) {
    const path = route.path.substr(1) || "/";
    console.log(path);
    return directoryArr.includes(path)
    // return (path === "/" + directory || path.startsWith("/" + directory + "/"));
  }

  let newRoutes = options.routes;
  console.log("old routes");
  console.log(newRoutes);
  const toRemove = domains.filter((domain) => domain !==  routesDirectory)
  console.log("routesDir", routesDirectory);
  console.log("to remove ", toRemove);
  if (routesDirectory) {
    newRoutes = options.routes
      .filter(route => {
        console.log("path : ", route.path.substr(1) || "/");
        console.log("tbd:", toRemove.includes(route.path.substr(1)));
        if(toRemove.includes(route.path.substr(1))){
          console.log("remove me: ", route);
          return false
        }
        return true
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
