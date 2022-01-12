// const yaml = require('js-yaml')
// const fs = require('fs')

// const { GetDS } = require('./getDS.js')
// const CONFIG = require('./baseConfig.js')

// const GetHeaders = () => {
//     const { Cookie } = yaml.load(fs.readFileSync('./config.yaml').toString())
//     if (!Cookie) throw new Error('请正确输入Cookie')
//     const headers = {
//         Host: 'api-takumi.mihoyo.com',
//         'Accept': 'application/json, text/plain, */*',
//         'x-rpc-device_id': '3920E531-8748-4833-A02B-45469D2ACB10',
//         'x-rpc-client_type': '5',
//         'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
//         'Content-Type': 'application/json;charset=utf-8',
//         'Origin': 'https://webstatic.mihoyo.com',
//         'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) miHoYoBB/${CONFIG.VERSION}`,
//         // Referer: 'https://webstatic.mihoyo.com/bbs/event/signin-ys/index.html?bbs_auth_required=true&act_id=e202009291139501&utm_source=bbs&utm_medium=mys&utm_campaign=icon',
//         'Referer': 'https://webstatic.mihoyo.com/',
//         'x-rpc-app_version': CONFIG.VERSION,
//         'DS': GetDS(),
//         // 'DS': '1641974598,0Al8f5,3a993c83e0e7f2d7ef1561ac4223b06f'
//     }
//     headers['Cookie'] = Cookie
//     return headers
// }

// module.exports = { GetHeaders }


const yaml = require('js-yaml')
const fs = require('fs')

const { GetDS } = require('./getDS.js')

const GetHeaders = () => {
    const { Cookie } = yaml.load(fs.readFileSync('./config.yaml').toString())
    if (!Cookie) throw(new Error('请正确输入Cookie'))
    const headers = {
        'accept-language': 'zh-CN,zh;q=0.9,ja-JP;q=0.8,ja;q=0.7,en-US;q=0.6,en;q=0.5',
        'x-rpc-device_id': '3920E531-8748-4833-A02B-45469D2ACB10',
        'User-Agent':
            'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) miHoYoBBS/2.3.0',
        // Referer:
        //     'https://webstatic.mihoyo.com/bbs/event/signin-ys/index.html?bbs_auth_required=true&act_id=e202009291139501&utm_source=bbs&utm_medium=mys&utm_campaign=icon',
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

module.exports = { GetHeaders }