const request = require('request')

class Request {
    constructor() {}
    get(url, config = {}) {
        return new Promise((resolve, reject) => {
            request(
                {
                    url: url,
                    method: 'GET',
                    ...config,
                },
                (err, res, body) => {
                    if (err) {
                        reject(err)
                    }
                    body = JSON.parse(body)
                    if (body.retcode !== 0) reject(body.message)
                    resolve(body.data)
                }
            )
        })
    }
    post(url, data = {}, config = {}) {
        console.log(config.headers)
        return new Promise((resolve, reject) => {
            const instance = request(
                {
                    url: url,
                    method: 'POST',
                    body: JSON.stringify(data),
                    ...config,
                },
                (err, res, body) => {
                    console.log(body)
                    if (err) {
                        reject(err)
                    }
                    body = JSON.parse(body)
                    if (body.retcode !== 0) reject(body.message)
                    resolve(body.message)
                }
            )
        })
    }
}
module.exports = new Request()
