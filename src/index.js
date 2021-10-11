// const fs = require("fs");
// const path = require("path");
// // const ora = require("ora");
// const zipper = require("zip-local");
// const shell = require("shelljs");
// const chalk = require("chalk");
// const CONFIG = require(path.resolve(process.cwd(), "./deploy.config.js"));
// const inquirer = require("inquirer");
// const NodeSSH = require("node-ssh").NodeSSH;

// import fs from "fs"
// import path from "path"
// import ora from "ora"
// import zipper from "zip-local"
// import shell from "shelljs"
// import inquirer from "inquirer"

import { compileDist } from "./compileDist.js"
import { zipDist } from "./zipDist.js"
import { connectSSh } from "./connectSSh.js"
import { NodeSSH } from "node-ssh"

// 执行打包上传命令
async function runTask(hasBuild) {
  const SSH = new NodeSSH();

  if (hasBuild) {
    await compileDist();
  }
  await zipDist();
  await connectSSh(SSH);
}

runTask()