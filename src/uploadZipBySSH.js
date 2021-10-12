// ********* 通过ssh 上传文件到服务器 *********
import ora from "ora"
import { runCommond } from "./instruction.js"
import { successLog, errorLog } from "./print.js"
import { CONFIG, distZipPath } from "./constant/index.js"

export const uploadZipBySSH = async (SSH) => {
  // 上传文件
  let spinner = ora("准备上传文件").start();
  try {
    await SSH.putFile(distZipPath, CONFIG.PWD + "/dist.zip");
    successLog("完成上传");
    spinner.text = "完成上传, 开始解压";
    await runCommond(`unzip -o ./dist.zip -d ${CONFIG.PATH}`, SSH);
    await runCommond("rm -rf ./dist.zip", SSH);
    spinner.stop();
    successLog("部署完成");
    process.exit(0);
  } catch (error) {
    errorLog(error);
    errorLog("上传失败");
    process.exit(0);
  }
  spinner.stop();
};
