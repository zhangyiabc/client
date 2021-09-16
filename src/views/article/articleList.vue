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
          <template v-for="item of articleData">
            <Card
              :key="item.id"
              :articleInfo="item"
              @handleNice="handleNice"
              @authorClick="authorClick"
              @labelClick="labelClick"
              @handleIntoDetail="handleIntoDetail"
            />
          </template>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Card from "./components/card.vue";
import { getArticle } from "@/apis/book";
import Top from "@/components/top";
import Layout from "@/layout";
import store from "@/store";
export default {
  name: "ArticleList",
  components: {
    Top,
    Layout,
    Card,
  },
  created() {
    this.getArticleData();
  },
  mounted() {
    store.dispatch("user/whoAmI").catch((err) => {
      console.log(err);
    });
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
          console.log(err);
        });
    },
    // 文章点赞
    handleNice(id) {
      console.log(id);
    },

    // 点击作者
    authorClick(AdminId) {
      console.log(AdminId);
    },
    // 点击标签
    labelClick(labelId) {
      console.log(labelId);
    },

    // 进入文章详情
    handleIntoDetail(id) {
      console.log(id);
      sessionStorage.setItem("ArticleId", id);
      this.$router.push({
        name:"BookDetail"
      })
    },
  },
};
</script>

<style lang="less" scoped>
.article-main {
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
}
</style>
