const CONFIG = require('./config.js')
const API_BASE_URL = 'http://127.0.0.1:8081/wx'

const GET = 'get'
const POST = 'post'

const request = (url, method, data) => {
    let _url = API_BASE_URL + url
    return new Promise((resolve, reject) => {
        wx.request({
            url: _url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/json'
            },
            success(request) {
                resolve(request.data)
            },
            fail(error) {
                reject(error)
            },
            complete(aaa) {
                //加载完成
            }
        })
    })
}

module.exports = {
    request,
    getMyApplication: (uid) => {
      return request('/getmyapplication', GET, uid)
    },
    /**
     * 提交申请
     */
    apply: (data) => {
      return request('/apply', POST, data)
    },
    /**
     * 注册
     * @POST('/user/register')
     * @Parameters({
     *  code: code,
     *  encryptedData: encryptedData,
     *  vi: vi
     * })
     * @Response(200, body={
     * 
     * })
     */
    register: (data) => {
      return request('/user/register', POST, data)
    },

    /**
     * 登录类型二，初次获取用户信息，使用code换取openid和session_key
     * @POST('/user/login')
     * @Parameters({
     *  code: code,
     *  userid: 
     *  password: 
     * })
     * @Response(200, body={
     *
     * })
     */
    login: (data) => {
      return request('/user/login', POST, data)
    },

    /**
     * 检查token是否过期
     */
    checkToken: (token) => {
      return request('/user/checktoken', GET, {token})
    },

    test: (data) => {
        return request('/test', GET, data)
    }
}