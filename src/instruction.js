import chalk from "chalk"
import { CONFIG } from "./constant/index.js"
import { defaultLog } from "./print.js"

// ********* 执行清空线上文件夹指令 *********
export const runCommond = async (commond, SSH) => {
  const result = await SSH.exec(commond, [], { cwd: CONFIG.PATH });
  console.log(chalk.yellow(result));
};

// ********* 执行清空线上文件夹指令 *********
export const runBeforeCommand = async (SSH) => {
  const COMMONDS = CONFIG.COMMONDS || [];
  defaultLog("执行前置命令");
  for (let i = 0; i < COMMONDS.length; i++) {
    await runCommond(COMMONDS[i], SSH);
  }
};
