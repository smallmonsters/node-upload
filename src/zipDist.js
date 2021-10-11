// ********* 压缩dist 文件夹 *********
import fs from "fs"
import zipper from "zip-local"
import { defaultLog, successLog, errorLog } from "./print.js"
import { distZipPath, distDir } from "./constant/index.js"

export const zipDist = async () => {
  try {
    if (fs.existsSync(distZipPath)) {
      defaultLog(`${distZipPath}已经存在, 即将删除压缩包`);
      fs.unlinkSync(distZipPath);
    } else {
      defaultLog("即将开始压缩zip文件");
    }
    await zipper.sync.zip(distDir).compress().save(distZipPath);
    successLog("文件夹压缩成功");
  } catch (error) {
    errorLog(error);
    errorLog(压缩distZipPath文件夹失败);
  }
};
