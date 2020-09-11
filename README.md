<h1 align="center">Welcome to k-domains 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/k-domains" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/k-domains.svg">
  </a>
  <a href="https://github.com/madhusudanbabar/k-router#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://www.npmjs.com/package/k-domains" target="_blank">
    <img alt="npm" src="https://img.shields.io/npm/dm/k-domains">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/MadhusudanBabar" target="_blank">
    <img alt="Twitter: MadhusudanBabar" src="https://img.shields.io/twitter/follow/MadhusudanBabar.svg?style=social" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/madhusudanbabar/k-router#readme)

### ✨ [Demo](https://madhusudan.live)


## What is this ?? 🤔
> A simple nuxt module to manage multiple subdomains with just a single nuxtJS project

## What problem does this solves?? 
&nbsp;&nbsp;&nbsp;&nbsp; Ever wondered how will you setup 3 sites of your own where you have same layouts & few shared components like feedback forms and so?? \
The simple way to do is copy, paste the same in all those 3 projects... isn't it?? \
But when you have to make changes, so you will require to copy the same thing in all the other projects... \
This is not the right way... ❌❌❌ \
*k-domains* let's you manage any number of subdomains with ease and that too without even need to create separate project for each subdomain (site). All your layouts, shared components and the code for these sites will live in one project only. All you have to is to just add `k-dmains` and configure it in your nuxt.config.js file as shown in the [#setup](#setup).

## Install

```sh
yarn add k-domains # or npm i k-domains
```

## Setup
1. Add ```k-domains``` to your project
```sh
yarn add k-domains # or npm i k-domains
``` 

2. Add `@nuxtjs/router` to your project
```sh 
yarn add @nuxtjs/router
```

3. Configure ```k-domains``` and ```@nuxtjs/router``` to the buildModules section of `nuxt.config.js` as follows:
```js
  export default {
    buildModules: [
      [ "k-domains", {
          subDomains: [ ], // List of directories to hold te pages for your subdomains
          rootDomain: "root-domain" //  directory to hold the pages for root domain  
      }
      ],
      ["@nuxtjs/router",{
          keepDefaultRouter: true // this line is mandatory...
      }
      ]
    ]
}
```
4. Example 
```js
  export default {
    buildModules: [
      [ "k-domains", {
          subDomains: ["blog", "projects", "anotherSubDomain" ], // List of directories to hold te pages for your subdomains
          rootDomain: "main-domain" //  directory to hold the pages for root domain  
      }
      ],
      ["@nuxtjs/router",{
          keepDefaultRouter: true // this line is mandatory...
      }
      ]
    ]
}
``` 
and the tree for the pages should look like this:
```
|   
|─pages
|   ├───blog
|   ├───projects
|   ├───main-domain
|   └───anotherSubDomain
```

5. That's it, now create pages in respective directories and it'll be mapped to that subdomains.


## Options
### `subDomains`
- Type: `Array<String>`
Add your subdomains here

### `rootDomain`
- Type: `String`
directory name for the pages of root-domain 

## Author

👤 **krypton < madhusudanbabar@gmail.com >**

* Website: https://madhusudan.live
* Twitter: [@MadhusudanBabar](https://twitter.com/MadhusudanBabar)
* Github: [@madhusudanbabar](https://github.com/madhusudanbabar)
* LinkedIn: [@madhusudan-babar](https://linkedin.com/in/madhusudan-babar)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/madhusudanbabar/k-router/issues). 

## Show your support

Consider giving a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
