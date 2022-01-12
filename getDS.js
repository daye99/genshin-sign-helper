// const md5Hex = require('md5-hex')
const { createHash } = require('crypto')
const md5 = createHash('md5')

const md5Hex = (str) => {
    return md5.update(str).digest('hex')
}

const { GetRandomStr } = require('./getRandomStr.js')

const GetDS = () => {
    const n = 'h8w582wxwgqvahcdkpvdhbh2w9casgfl'
    const i = Math.floor(new Date().getTime() / 1000) + ''
    const r = GetRandomStr(6)
    const c = md5Hex(`salt=${n}&t=${i}&r=${r}`)
    return `${i},${r},${c}`
}
module.exports = { GetDS }
