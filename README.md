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

> A simple nuxt module to manage multiple subdomains with just one project

### 🏠 [Homepage](https://github.com/madhusudanbabar/k-router#readme)

### ✨ [Demo](madhusudan.live)

## Install

```sh
npm i k-domains
```

## Setup
1. Add ```k-domains``` to your project
```sh
yarn add k-domains # or npm i k-domains
``` 
2. ```k-domains``` to the buildModules section of nuxt.config.js
```js
    export default {
  buildModules: [
    [ "k-domains", {
        subDomains: [ ], // Add subdomains here and create directories in projects folder
        rootDomain: "root-domain" //  Create a directory to hold the pages for root domain and write it here  
      }
    ],
  ]
}
```
3. Create Directories in `pages` folder with the values given in subDomains option
4. Add all your pages for the root-domain
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