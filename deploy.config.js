export const config = Object.freeze({
  SERVER_PATH: "42.193.7.114", // 服务器ip地址
  SSH_USER: "root", // 服务器用户名
  SSH_KEY: "123lpjLPJ", // 服务器密码 
  PORT: 22, // 端口 默认为22
  DIST: "./build", // 需要部署的打包过后的文件夹 根据项目不同值不同 一般为 build static 或者dist
  SCRIPT: "npm run build", // 打包命令 可能项目由不同的构建命令 如打包指定环境的代码
  PWD: "/test/cqgys", //  命令执行目录
  PATH: "/test/cqgys/build", // 服务器存放静态文件目录
  COMMONDS: [`rm -rf build`, `mkdir build`], // 上传前执行的命令 本例是指 查看服务器对应/opt/book/admin下的文件 然后删除index.html,css,js这写文件和目录,  之后会执行上传本地文件到服务器操作
});
