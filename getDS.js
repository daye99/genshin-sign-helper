const crypto = require('crypto');

const md5Hex = (str) => {
    const hash = crypto.createHash('md5')
    const update = (buffer) => {
        const inputEncoding = typeof buffer === 'string' ? 'utf8' : undefined
        hash.update(buffer, inputEncoding)
    }
    if (Array.isArray(str)) {
        for (const element of str) {
            update(element)
        }
    } else {
        update(str)
    }
    return hash.digest('hex')
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
