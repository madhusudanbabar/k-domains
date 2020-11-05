var logger = require("consola").withScope("k-domains");
import { existsSync, copyFileSync } from 'fs';
import path from 'path';

export default function(options) {
  const routerFile = path.join(this.options.srcDir, "router.js");
  if( !existsSync(routerFile) ){
    logger.info(new Error("router.js file not found"));
    logger.info(`creating new router configuration in ${this.options.srcDir}`)
    copyFileSync(path.join(__dirname, "router.js"), routerFile);
  }
 }
// module.js
module.exports.meta = require('../package.json')
