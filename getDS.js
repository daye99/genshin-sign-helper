
import md5Hex from 'md5-hex'

import { GetRandomStr } from './getRandomStr.js'

export const GetDS = () => {
    const n = 'h8w582wxwgqvahcdkpvdhbh2w9casgfl'
    const i = Math.floor(new Date().getTime() / 1000) + ''
    const r = GetRandomStr(6)
    const c = md5Hex(`salt=${n}&t=${i}&r=${r}`)
    return `${i},${r},${c}`
}
