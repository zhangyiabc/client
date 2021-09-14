// 评论的接口
import request from "@/utils/request"
const getAllComment = (data) => {
  return request({
    url: "api/api/comment",
    method: "GET",
    params: data
  })
}

const deleteComment = (id, data) => {
  return request({
    url: "api/api/comment/" + id,
    method: "GET",
    data: data
  })
}

export { getAllComment, deleteComment }