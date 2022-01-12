const fs = require('fs')
const yaml = require('js-yaml')

const http = require('./request.js')

const { SENDKEY } = yaml.load(fs.readFileSync('./config.yaml').toString())
if (!SENDKEY) throw new Error('请正确输入SENDKEY')

const SendMessage = async (title) => {
    try {
        const url = `https://sctapi.ftqq.com/${SENDKEY}.send?title=${title}`
        await http.get(encodeURI(url))
    } catch (error) {}
}

module.exports = { SendMessage }
