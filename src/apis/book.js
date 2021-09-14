// 关于文章的接口
import request from "@/utils/request";
const getArticle = (data) => {
  return request({
    url: "api/api/article",
    method: "GET",
    params: data
  });
};

const publishArticle = (data) => {
  return request({
    url: "api/api/article",
    method: "POST",
    data
  })
}

const getArticleDetail = (id) => {
  return request({
    url: "api/api/article/" + id,
    method: "GET",
  });
};

const deleteArticle = (id) => {
  return request({
    url: "api/api/article/" + id,
    method: "DELETE",
  })
}

const updateArticle = (id, data) => {
  return request({
    url: "api/api/article/" + id,
    method: "PUT",
    data
  })
}
export { getArticle, publishArticle, getArticleDetail, deleteArticle,updateArticle };
