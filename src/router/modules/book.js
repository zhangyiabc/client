// import BookList from "@/views/article/articleList.vue";
export default [
  {
    path: "/book",
    name: "Book",
    component: () => import("@/views/article/articleList.vue"),
  },
  { path: "/book/detail" },
];
