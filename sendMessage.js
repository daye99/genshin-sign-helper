// import yaml from 'js-yaml'
// import fs from 'node:fs'

import http from './request.js'


// const { SENDKEY } = yaml.load(fs.readFileSync('./config.yaml').toString())
const SENDKEY = process.env.SENDKEY

const SendMessage = async (title) => {
    try {
        const url = `https://sctapi.ftqq.com/${SENDKEY}.send?title=${title}`
        await http.get(encodeURI(url))
    } catch (error) {}
}

export { SendMessage }
