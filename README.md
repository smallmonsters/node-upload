## 使用node打包上传

使用node实现压缩文件，并上传到服务器。

##### 需求
1. 实现交互式命令行
   ~~-  实现默认值~~ 使用配置文件的形式
  > 参考:  
  > <font size=2>[NodeJs交互式命令行工具Inquirer.js-开箱指南](https://www.jianshu.com/p/db8294cfa2f7)</font>
2. 压缩文件
   - 实现进度条
3. 链接服务器，删除源文件，上传压缩文件并解压
   - 删除、上传和解压后实现提示
  > 参考：  
  > <font size=2>[从零开始 Node实现前端自动化部署](https://www.jianshu.com/p/312f3be018de)</font>
4. 增加一个打包信息文件

##### 依赖

1、[node-ssh](https://www.npmjs.com/package/node-ssh)：使node可以进行ssh链接  
2、[archiver](https://www.npmjs.com/package/archiver)：压缩文件  
3、[inquirer](https://www.npmjs.com/package/inquirer)：一个进度条插件 让等待不在无聊的插件  
4、[ora](https://www.npmjs.com/package/ora)：压缩文件的插件 用来压缩打包好的静态文件  
5、[zip-local](https://www.npmjs.com/package/zip-local)：交互式命令行  
6、[shelljs](https://www.npmjs.com/package/shelljs)：用来在代码中执行命令行操作 
7、[chalk](https://www.npmjs.com/package/chalk)：用于控制台带颜色的输出 告别纯白字体

##### 待解决问题
1、ora库无法使用require引入
> 使用5.4.1版本

##### 参考
[使用node编写自动部署静态文件脚本](https://juejin.cn/post/6844904049989386247)
