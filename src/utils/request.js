import axios from "axios"
const service = axios.create({
  timeout: 10000,
  withCredentials: true,
})

// 拦截请求
service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response =>{
    
    const result = response.data
    let code = result.code
    if (code !== '200') {
      switch (code) {
        case '500' : response.message = '系统异常'; break
        case '501' : response.message = '网关异常'; break
        case '502' : response.message = '网关超时'; break
        case '503' : response.message = '系统繁忙,请稍候再试'; break
        case '401' : response.message = '请求参数校验不通过'; break
        case '403' : response.message = '无效token'; break
        case '404' : response.message = '服务未找到'; break
        default: response.message = result.mesg
      }
      console.error('code: ' + result.code + ' - ' + response.message)
      return Promise.reject(new Error(result.mesg || 'Error'))
    } else {
      return result
    }
  },
  err => {
    return Promise.reject(err)
  }
)


export default service