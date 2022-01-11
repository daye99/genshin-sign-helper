
const act_id = 'e202009291139501'

const region = 'cn_gf01'

const Referer = `https://webstatic.mihoyo.com/bbs/event/signin-ys/index.html?bbs_auth_required=true&act_id=${act_id}&utm_source=bbs&utm_medium=mys&utm_campaign=icon`

const Host = 'api-takumi.mihoyo.com'



const GET_USER_INFO = `https://api-takumi.mihoyo.com/binding/api/getUserGameRolesByCookie?game_biz=hk4e_cn`

const GET_SIGN_AWARDS = `https://api-takumi.mihoyo.com/event/bbs_sign_reward/home?act_id=${act_id}`

const POST_SIGN = 'https://api-takumi.mihoyo.com/event/bbs_sign_reward/sign'

const GET_SIGN_INFO = `https://api-takumi.mihoyo.com/event/bbs_sign_reward/info?region=${region}&act_id=${act_id}&uid=`

export default {
    act_id,
    region,
    Referer,
    Host,
    GET_SIGN_INFO,
    GET_SIGN_AWARDS,
    POST_SIGN,
    GET_USER_INFO
}