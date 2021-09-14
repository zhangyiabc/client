import request from "@/utils/request"
// 关于标签的接口
const getAddLabel = () => {
  return request({
    url: "api/api/label",
    method: "GET"
  })
}

export { getAddLabel }
