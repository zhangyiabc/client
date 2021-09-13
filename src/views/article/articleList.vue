<template>
  <div class="article-list">
    <Layout>
      <template #top>
        <div class="top-slot">
          <Top />
        </div>
      </template>
      <template #main>
        <div class="article-main">
          <!-- <div>{{ articleData }}</div> -->
          <template v-for="item of articleData ">
            <Card :key="item.id" :articleInfo="item"/>
          </template>


        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Card from "./components/card.vue"
import { getArticle } from "@/apis/book";
import Top from "@/components/top";
import Layout from "@/layout";
export default {
  name: "ArticleList",
  components: {
    Top,
    Layout,
    Card
  },
  created(){
    this.getArticleData()
  },
  data() {
    return {
      articleData: [],
    };
  },
  methods: {
    getArticleData(page = 1, size = 10, title = "") {
      getArticle()
        .then((res) => {
          this.articleData = res.data.data;
        })
        .catch((err) => {
          console.log(err)
        });
    },
  },
};
</script>

<style lang="less" scoped>

.article-main{
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
}
</style>
