<h1 align="center">Welcome to k-domains 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/k-domains" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/k-domains.svg">
  </a>
  <a href="https://github.com/madhusudanbabar/k-router#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/MadhusudanBabar" target="_blank">
    <img alt="Twitter: MadhusudanBabar" src="https://img.shields.io/twitter/follow/MadhusudanBabar.svg?style=social" />
  </a>
</p>

> A simple nuxt module to manage multiple subdomains with just a single nuxtJS project

### 🏠 [Homepage](https://github.com/madhusudanbabar/k-router#readme)

### ✨ [Demo](https://madhusudan.live)

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

3. Configure ```k-domains``` and ```@nuxtjs/router``` to the buildModules section of `nuxt.config.js`
```js
  export default {
    buildModules: [
      [ "k-domains", {
          subDomains: [ ], // Add subdomains here and create directories in projects folder
          rootDomain: "root-domain" //  directory to hold the pages for root domain  
      }
      ],
      ["@nuxtjs/router",{
          keepDefaultRouter: true // this line is necessary
      }
      ]
    ]
}
```

4. Create Directories in `pages` folder with the values given in subDomains option.
5. Add your pages for the `root-domain`.
6. At the end your pages directory should look like this:
```
|   
|─pages
|   ├───subdomain1
|   ├───subdomain2
|   ├───root-domain
|   └───subdomain3
```

## Options
### `subDomains`
- Type: `Array`
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

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_