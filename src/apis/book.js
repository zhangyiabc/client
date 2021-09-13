// 关于文章的接口
import request from "@/utils/request";
const getArticle = (data) => {
  return request({
    url: "api/api/article",
    method:"GET",
    params:data
  });
};

export { getArticle };
