import path from "path"
// import CONFIG from path.resolve(process.cwd(), "./deploy.config.js")
import { config } from "../../deploy.config.js"

// export const CONFIG = require(path.resolve(process.cwd(), "./deploy.config.js"));
// export const CONFIG = path.resolve(process.cwd(), "./deploy.config.js")
export const CONFIG = config
console.log(CONFIG)
// 文件夹位置
export const distDir = path.resolve(process.cwd(), CONFIG.DIST || './dist');
export const distZipPath = path.resolve(process.cwd(), "./dist.zip");
