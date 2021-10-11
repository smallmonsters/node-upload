const config = require("./config/index")
const fs = require('fs');

fs.readdir(config.targetDir, function (err, files) {
  if (err) throw new Error(err)

})