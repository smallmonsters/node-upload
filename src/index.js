const config = require("./config/index")
const inquirer = require('inquirer')
/* 
  Question:{
    type: (String) input, number, confirm, list, rawlist, expand, checkbox, password, editor，默认input
    name: (String)  返回 answers 对象的key值 {压缩的文件:xxx}
  }
  Questions:Question[]
  inquirer.prompt(questions:Questions , answers) -> promise

*/
inquirer.prompt([{
  type: 'confirm',
  name: '压缩的文件',
  message: `输入需要压缩的文件（默认${config.targetDir}）`,
  default: config.targetDir
}]).then((answers) => {
  console.log('结果为:')
  console.log(answers)
})