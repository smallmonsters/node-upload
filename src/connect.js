const fs = require('fs')
const path = require('path')
const { NodeSSH } = require('node-ssh')

const ssh = new NodeSSH()

ssh.connect({
  host: '116.63.55.55',
  username: 'root',
  password: 'Bicitech!@#111'
}).then(function () {
  console.log(`success`)
}, function (err) {
  console.log(err)
})
