import logger from "./logger"
import { watch } from 'chokidar';
import { existsSync, copyFileSync } from 'fs';
import path from 'path';

export default function(options) {

  const pages = path.join(this.options.srcDir, "pages")
  const routerFile = path.join(this.options.srcDir, "router.js")

  if( !existsSync(routerFile) ){
    // logger.warn(new Error("router.js file not found"));
    logger.info(`creating new router configuration in ${this.options.srcDir}`)
    copyFileSync(path.join(__dirname, "router.js"), routerFile);
  }
 }

// module.js
module.exports.meta = require('../package.json')
