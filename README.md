## 使用node打包上传

使用node实现压缩文件，并上传到服务器。

##### 需求
1. 实现交互式命令行
   -  实现默认值
  > 参考:  
  > <font size=2>[NodeJs交互式命令行工具Inquirer.js-开箱指南](https://www.jianshu.com/p/db8294cfa2f7)</font>
2. 压缩文件
   - 实现进度条
3. 链接服务器，删除源文件，上传压缩文件并解压
   - 删除、上传和解压后实现提示
  > 参考：  
  > <font size=2>[从零开始 Node实现前端自动化部署](https://www.jianshu.com/p/312f3be018de)</font>

##### 依赖

1、[node-ssh](https://www.npmjs.com/package/node-ssh)：使node可以进行ssh链接  
2、[archiver](https://www.npmjs.com/package/archiver)：压缩文件  
2、[inquirer](https://www.npmjs.com/package/inquirer)：交互式命令行  
