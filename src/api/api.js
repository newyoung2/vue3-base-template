import request from '../utils/request.js'

// 用户登录查询当前状态
const userQueryUrl = `app/vedio/order/miguQuery`;
export function getUserQuery(data) {
  return request({
    url: userQueryUrl,
    method: 'post',
    data
  })
}


//  用户登录接口
const userLoginUrl = `app/vedio/order/miguLogin`;
export function getUserLogin(data) {
  return request({
    url: userLoginUrl,
    method: 'post',
    data
  })
}

//  获取用户手机验证码
const getCodeUrl = `app/sms/captcha`;
export function getMobileCode(data) {
  return request({
    url: getCodeUrl,
    method: 'post',
    data
  })
}




