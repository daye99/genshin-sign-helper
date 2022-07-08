import request from 'request'

class Request {
    constructor() { }
    get(url: string, config = {}) {
        return new Promise((resolve, reject) => {
            request(
                {
                    url: url,
                    method: 'GET',
                    ...config,
                },
                (err: any, res: any, bodyStr: string) => {
                    if (err) {
                        reject(err)
                    }
                    const body: API.ResObject | SIGNINRO.ResObject | AWARDSAPI.ResObject = JSON.parse(bodyStr)
                    if (body.retcode !== 0) reject(body.message)
                    resolve(body.data)
                }
            )
        })
    }
    post(url, data = {}, config = {}) {
        return new Promise((resolve, reject) => {
            const instance = request(
                {
                    url: url,
                    method: 'POST',
                    body: JSON.stringify(data),
                    ...config,
                },
                (err: any, res: any, bodyStr: string) => {
                    if (err) {
                        reject(err)
                    }
                    const body = JSON.parse(bodyStr) as API.ResObject
                    if (body.retcode !== 0) reject(body.message)
                    resolve(body.message)
                }
            )
        })
    }
}

export default new Request()
