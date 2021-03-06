// 用户的接口
import request from "@/utils/request";
import { removeItem } from "@/utils/storage"
const login = (data) => {
  removeItem("token")
  return request({
    url: "api/api/admin/login",
    method: "POST",
    data
  });
};

const register = (data) => {
  return request({
    url: "api/api/admin/register",
    method: "POST",
    data
  })

}

const whoami = () => {
  return request({
    url: "api/api/admin/whoami",
    method: "GET"
  })
}

const upload = (data) => {
  return request({
    url: "api/api/upload",
    method: "POST",
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: data

  })
}

// 用户相关的路由
const getUserInfo = (id) => {
  return request({
    usr: "api/api/admin/user/" + id,
    method: "GET"
  })
}


export { login, register, whoami, upload, getUserInfo };
