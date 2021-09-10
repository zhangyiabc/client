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
          文章列表
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Top from "@/components/top";
import Layout from "@/layout";
export default {
  name: "ArticleList",
  components: {
    // HelloWorld
    Top,
    Layout,
  },
};
</script>

<style></style>
