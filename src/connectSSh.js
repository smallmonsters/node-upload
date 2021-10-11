// ********* 连接ssh *********
import ora from "ora"
import { successLog, errorLog, defaultLog } from "./print.js"
import { CONFIG } from "./constant/index.js"
import { runBeforeCommand } from "./instruction.js"
import { uploadZipBySSH } from "./uploadZipBySSH.js"

export const connectSSh = async (SSH) => {
  defaultLog(`尝试连接服务： ${CONFIG.SERVER_PATH}`);
  let spinner = ora("正在连接");
  spinner.start();
  try {
    SSH.connect({
      host: CONFIG.SERVER_PATH,
      username: CONFIG.SSH_USER,
      password: CONFIG.SSH_KEY,
      port: CONFIG.PORT || 22,
    }).then(async () => {
      await runBeforeCommand(SSH);
      await uploadZipBySSH(SSH);
    });
    spinner.stop();
    successLog("SSH 连接成功");
  } catch (error) {
    spinner.stop();
    errorLog(error);
    errorLog("SSH 连接失败");
  }
};