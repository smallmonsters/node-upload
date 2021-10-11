const config = require("./config/index")
const inquirer = require('inquirer')
const fs = require('fs');
const archiver = require('archiver');



// inquirer.prompt([{
//   type: 'confirm',
//   name: '压缩的文件',
//   message: `输入需要压缩的文件（默认${config.targetDir}）`,
//   default: config.targetDir
// }]).then((answers) => {
//   console.log('结果为:')
//   console.log(answers)
// })

console.log(config.targetDir + '.zip')




// const output = fs.createWriteStream(config.targetDir + '1.zip');
// const archive = archiver('zip', {
//   zlib: { level: 9 } // Sets the compression level.
// });

// archive.pipe(output);

// archive.finalize();