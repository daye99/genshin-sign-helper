/*
 * @Author: wenzhenjin
 * @Date: 2022-01-12 16:24:33
 * @LastEditTime: 2022-01-12 16:24:34
 * @LastEditors: wenzhenjin
 * @Description: 
 * @FilePath: /mihayo/aa.js
 */


var request = require('request');

var headers = {
    'Host': 'api-takumi.mihoyo.com',
    'Accept': 'application/json, text/plain, */*',
    'x-rpc-device_id': '3920E531-8748-4833-A02B-45469D2ACB10',
    'x-rpc-client_type': '5',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Content-Type': 'application/json;charset=utf-8',
    'Origin': 'https://webstatic.mihoyo.com',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) miHoYoBBS/2.20.1',
    'Referer': 'https://webstatic.mihoyo.com/',
    'x-rpc-app_version': '2.20.1',
    'DS': '1641974598,0Al8f5,3a993c83e0e7f2d7ef1561ac4223b06f',
    'Cookie': '_MHYUUID=b8489be1-2e27-4b54-ab16-78712709e439; _ga=GA1.1.226506494.1641974588; _ga_KJ6J9V9VZQ=GS1.1.1641974587.1.1.1641974596.0; account_id=305144737; cookie_token=IjhPMoAAfPAbFYUNhRSwboGuDgiGm7qTLjMHSWvE; login_ticket=fTAu16XP1hB3TxTQPIJfcgWO10MLMCgFBPPAx9YG; ltoken=kWticvtzyLZB1cu8kBtk5amqHF5nfR4ahBJGMVm1; ltuid=305144737; aliyungf_tc=ca3f29434e1fc92905c842374c21dc46e5855d550e54f78c5aa9268988f3c444; UM_distinctid=17e487fe23875a-01e291c2c62db58-4f7d370f-505c8-17e487fe239d55'
};

var dataString = '{"act_id":"e202009291139501","region":"cn_gf01","uid":"210116236"}';

var options = {
    url: 'https://api-takumi.mihoyo.com/event/bbs_sign_reward/sign',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);