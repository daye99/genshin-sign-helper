import http from './src/request.js'

import {
    GET_USER_INFO,
    GET_SIGN_INFO,
    GET_SIGN_AWARDS,
    POST_SIGN,
    act_id
} from './src/baseConfig.js'

import { GetHeaders } from './src/getHeaders.js'
import { SendMessage } from './src/sendMessage.js'

const getUserInfo = async () => {
    try {
        const res = await http.get(GET_USER_INFO, {
            headers: GetHeaders(),
        }) as API.Data
        return res.list[0]
    } catch (error) {
        return new Error('获取用户信息失败')
    }
}

const getSignInfo = async (uid: string) => {
    try {
        const res = await http.get(GET_SIGN_INFO + uid, {
            headers: GetHeaders(),
        })
        return res
    } catch (error) {
        return new Error('获取签到信息失败')
    }
}

const getAwards = async () => {
    try {
        return await http.get(GET_SIGN_AWARDS, {
            headers: GetHeaders(),
        })
    } catch (error) {
        return new Error('获取签到奖励列表失败')
    }
}

const main = async () => {
    try {
        const { game_uid, region } = await getUserInfo() as API.List
        const { first_bind, total_sign_day } = await getSignInfo(game_uid) as SIGNINRO.Data
        const awards = await getAwards() as AWARDSAPI.Data
        if (first_bind) {
            return
        }
        const headers = GetHeaders()

        const res = await http.post(
            POST_SIGN,
            {
                act_id: act_id,
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

main()
