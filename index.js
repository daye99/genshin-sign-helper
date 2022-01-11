import http from './request.js'

import CONFIG from './baseConfig.js'

import { GetHeaders } from './getHeaders.js'
import { SendMessage } from './sendMessage.js'

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

export const main = async () => {
    try {
        const { game_uid, region } = await getUserInfo()
        const { first_bind, total_sign_day } = await getSignInfo(game_uid)
        const awards = await getAwards()
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
        SendMessage(`原神签到助手:成功 ${awards.awards[total_sign_day].name} * ${awards.awards[total_sign_day].cnt}`)
    } catch (error) {
        SendMessage(`原神签到助手:失败 ${error}`)
    }
}


