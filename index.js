// import http from './request.js'
const http = require('./request.js')

const CONFIG = require('./baseConfig.js')

const { GetHeaders } = require('./getHeaders.js')
// import { SendMessage } from './sendMessage.js'
const { SendMessage } = require('./sendMessage.js')

const getUserInfo = async () => {
    const res = await http.get(CONFIG.GET_USER_INFO, {
        headers: GetHeaders(),
    })
    return res.list[0]
}

const getSignInfo = async (uid) => {
    const res = await http.get(CONFIG.GET_SIGN_INFO + uid, {
        headers: GetHeaders(),
    })
    return res
}

const getAwards = async () => {
    return await http.get(CONFIG.GET_SIGN_AWARDS, {
        headers: GetHeaders(),
    })
}

exports.main = async () => {
    try {
        const { game_uid, region } = await getUserInfo()
        console.log(123123)
        const { first_bind, total_sign_day } = await getSignInfo(game_uid)
        console.log(567567567)
        const awards = await getAwards()
        console.log(678678678)
        if (first_bind) {
            return
        }
        const headers = GetHeaders()

        const res = await http.post(
            CONFIG.POST_SIGN,
            {
                act_id: CONFIG.act_id,
                region: region,
                uid: game_uid,
            },
            {
                headers: headers,
            }
        )
        console.log(res)
        SendMessage(`原神签到助手:成功 ${awards.awards[total_sign_day].name} * ${awards.awards[total_sign_day].cnt}`)
    } catch (error) {
        console.log(1999999)
        console.log(error)
        console.log(345345345345)
        SendMessage(`原神签到助手:失败 ${error}`)
    }
}
