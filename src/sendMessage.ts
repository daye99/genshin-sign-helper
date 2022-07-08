

import http from './request.js'

// const { SENDKEY } = yaml.load(fs.readFileSync('./config.yaml').toString())
const SENDKEY = process.env.SENDKEY

export const SendMessage = async (title: string) => {
    try {
        const url = `https://sctapi.ftqq.com/${SENDKEY}.send?title=${title}`
        await http.get(encodeURI(url))
    } catch (error) {}
}
