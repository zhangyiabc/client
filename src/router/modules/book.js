// import BookList from "@/views/article/articleList.vue";
export default [
  {
    path: "/book",
    name: "Book",
    component: () => import("@/views/article/articleList.vue"),
  },
  {
    path: "/book/detail",
    name: "BookDetail",
    component: () => import("@/views/article/articleDetail.vue")
  },
  {
    path: "/book/write",
    name: "WriteArticle",
    component: () => import("@/views/article/writeArticle.vue")
  },

];
