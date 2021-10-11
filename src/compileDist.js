// 打包
import shell from "shelljs"
import { CONFIG } from "./constant/index.js"
import path from "path"

export const compileDist = async () => {
  // 进入本地文件夹
  shell.cd(path.resolve(process.cwd(), "./"));
  shell.exec(CONFIG.SCRIPT||'npm run build');
  successLog("编译完成");
};
