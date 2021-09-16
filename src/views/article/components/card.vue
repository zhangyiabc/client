<template>
  <div class="card-container">
    <div class="line"></div>
    <div class="card-top">
      <span class="name" @click="authorClick">
        <el-link type="info">{{ articleInfo.Admin.author }} </el-link>
      </span>
      |
      <span>
        <i> {{ articleInfo.time }}</i> 天前</span
      >
      |
      <span class="tag" @click="labelClick">
        <el-link type="info">{{ articleInfo.Label.tag }} </el-link></span
      >
    </div>
    <div class="card-main">
      <div class="main-left">
        <h3 class="title" @click="handleIntoDetail">{{ articleInfo.title }}</h3>
        <div class="left-main" @click="handleIntoDetail">
          {{ articleInfo.content }}
        </div>
      </div>
      <div class="main-right" @click="handleIntoDetail">
        <img v-if="articleInfo.cover" :src="articleInfo.cover" alt="" />
      </div>
    </div>
    <div class="card-bottom">
      <span class="view"
        ><i class="el-icon-view"></i>{{ articleInfo.viewcount }}</span
      >
      <span class="nice" @click="handleNice"
        ><i class="iconfont icon-dianzan"></i>{{ articleInfo.nicecount }}</span
      >
      <span class="comment"
        ><i class="el-icon-chat-line-round"></i>{{ 1 }}</span
      >
    </div>
  </div>
</template>

<script>
/**
 * 一个卡片组件
 */
export default {
  props: {
    articleInfo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      author: "张益达",
      time: "三天前",
      label: "前端",
    };
  },
  methods: {
    handleNice() {
      console.log("点击了点赞");
      this.$emit("handleNice",this.articleInfo.id)
    },
    authorClick(){
      console.log("点击了用户名")
      this.$emit("authorClick",this.articleInfo.AdminId)
    },

    labelClick(){
      console.log("点击了文章标签")
      this.$emit("labelClick",this.articleInfo.LabelId)

    },

    handleIntoDetail(){
      console.log("点击进入文章详情")
      this.$emit("handleIntoDetail",this.articleInfo.id)
    }
  },
};
</script>

<style lang="less" scoped>
@import url("https://at.alicdn.com/t/font_2804341_sd009a4l2d8.css");

.card-container {
  padding: 20px;
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  &:hover {
    background: rgba(0, 206, 201, 0.02);
  }
  .line {
    width: 98%;
    height: 1px;
    background-color: transparent;
    background-image: linear-gradient(to right, transparent, #667, transparent);
    margin-bottom: 10px;
  }
  .card-top {
    width: 100%;
    span {
      margin-right: 2px;
      i {
        font-size: 20px;
        color: #74b9ff;
        font-weight: 700;
      }
      &.name .el-link {
        font-family: "字体视界-小南同学";
        font-weight: 700;
        color: #665;
        // color: #b71540;
      }
      &.tag {
        background-color: rgb(190, 216, 247);
        padding: 5px;
        border-radius: 5px;
      }
      &.tag .el-link {
        font-family: "华文宋体";
        font-weight: 700;
        color: #fff;
      }
    }
  }
  .card-main {
    cursor: pointer;
    height: 80%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    // background-color: #667;
    .main-left {
      width: 70%;
      .title {
        &:hover {
          color: #74b9ff;
        }
      }
    }
    .main-right {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        height: 80%;
      }
    }
  }
  .card-bottom {
    span {
      margin-right: 10px;
      i {
        margin-right: 5px;
      }
    }
    .nice {
      i {
        font-size: 18px;
      }
    }
  }
}
</style>
