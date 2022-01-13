// import yaml from 'js-yaml'
// import fs from 'node:fs'
import { v4 as uuidv4 } from 'uuid'

import { GetDS } from './getDS.js'

export const GetHeaders = () => {
    // const { Cookie } = yaml.load(fs.readFileSync('./config.yaml').toString())
    const Cookie = process.env.COOKIE

    const headers = {
        'accept-language': 'zh-CN,zh;q=0.9,ja-JP;q=0.8,ja;q=0.7,en-US;q=0.6,en;q=0.5',
        'x-rpc-device_id': uuidv4().replace('-', '').toLocaleUpperCase(),
        'User-Agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) miHoYoBBS/2.3.0',
        Referer:
            'https://webstatic.mihoyo.com/bbs/event/signin-ys/index.html?bbs_auth_required=true&act_id=e202009291139501&utm_source=bbs&utm_medium=mys&utm_campaign=icon',
        Host: 'api-takumi.mihoyo.com',
        'x-rpc-channel': 'appstore',
        'x-rpc-app_version': '2.3.0',
        'x-requested-with': 'com.mihoyo.hyperion',
        'x-rpc-client_type': '5',

        'Content-Type': 'application/json;charset=UTF-8',
        DS: GetDS(),
    }
    headers['Cookie'] = Cookie
    return headers
}
