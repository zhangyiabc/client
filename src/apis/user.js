// 用户的接口
import request from "@/utils/request";
const login = (data) => {
  return request({
    url: "api/api/admin/login",
    method:"POST",
    data
  });
};

const register = (data) => {
  return request({
    url:"api/api/admin/register",
    method:"POST",
    data
  })

}

export { login, register };
