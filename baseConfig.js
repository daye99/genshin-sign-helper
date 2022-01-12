const act_id = 'e202009291139501'

const region = 'cn_gf01'

exports.Referer = `https://webstatic.mihoyo.com/bbs/event/signin-ys/index.html?bbs_auth_required=true&act_id=${act_id}&utm_source=bbs&utm_medium=mys&utm_campaign=icon`

exports.Host = 'api-takumi.mihoyo.com'

exports.GET_USER_INFO = `https://api-takumi.mihoyo.com/binding/api/getUserGameRolesByCookie?game_biz=hk4e_cn`

exports.GET_SIGN_AWARDS = `https://api-takumi.mihoyo.com/event/bbs_sign_reward/home?act_id=${act_id}`

exports.POST_SIGN = 'https://api-takumi.mihoyo.com/event/bbs_sign_reward/sign'

exports.GET_SIGN_INFO = `https://api-takumi.mihoyo.com/event/bbs_sign_reward/info?region=${region}&act_id=${act_id}&uid=`

exports.act_id

exports.region