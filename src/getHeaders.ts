/*
 * @Author: wenzhenjin
 * @Date: 2022-04-02 10:30:34
 * @LastEditTime: 2022-04-02 12:11:32
 * @LastEditors: wenzhenjin
 * @Description: 
 * @FilePath: /genshin-sign-helper/getHeaders.js
 */
import { v4 as uuidv4 } from 'uuid'

import { GetDS } from './getDS.js'

export const GetHeaders = () => {
    // const { Cookie } = yaml.load(fs.readFileSync('./config.yaml').toString())
    // const Cookie = process.env.COOKIE
    const Cookie = 'UM_distinctid=181b87e14696f8-09318cde2bacae-1c525635-13c680-181b87e146ae1e; _ga=GA1.2.1578227873.1656657680; _gid=GA1.2.1716387756.1656657680; CNZZDATA1275023096=1269326415-1656657042-%7C1656657042; _gat=1; _MHYUUID=d8931448-d53f-40eb-8c23-f95172b5284f; ltoken=LObhyuMhtcIVHuymQbYY3Yg9oSDDUhHFySFnYxVU; ltuid=270839143; cookie_token=v7PEEQxycajCcynjBNwbJiSjObPAaqMTj28C9MBo; account_id=270839143'

    const headers:OPTION.Headers = {
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
