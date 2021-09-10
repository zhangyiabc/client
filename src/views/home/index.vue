<template>
  <div class="home">
    <Layout>
      <template #top>
        <div class="top-slot">
          <Top />
        </div>
      </template>
      <template #main>
        这是我的首页个人介绍
      </template>
    </Layout>
  </div>
</template>

<script>
import Top from "@/components/top";
import Layout from "@/layout";
export default {
    components: {
    // HelloWorld
    Top,
    Layout,
  },
};
</script>

<style></style>
