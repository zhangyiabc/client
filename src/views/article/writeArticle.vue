<template>
  <div class="write">
    <el-page-header @back="goBack" content="写下您的文章" class="write-header">
    </el-page-header>
    <div class="write-top">
      <div class="top-left">
        <el-upload
          class="cover"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleCoverSuccess"
          :before-upload="beforeCoverUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <p>添加文章封面，不添加会使用默认的</p>
      </div>
      <div class="top-right">
        <el-select
          v-model="labelValue"
          class="label-select"
          placeholder="请选择文章标签"
        >
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.tag"
            :value="item.id"
          >
          </el-option>
        </el-select>
        <el-input
          placeholder="请输入文章标题……"
          class="article-title"
          v-model="input"
          clearable
        >
        </el-input>
        <div class="dec">
          请填写完整文章标题和文章所属标签
        </div>
      </div>
    </div>
    <div class="write-container" ref="write-container"></div>
    <!-- <el-input
      type="textarea"
      :rows="12"
      ref="text"
      placeholder="请输入内容"
      v-model="textarea"
    >
    </el-input> -->
    <div class="footer"></div>
    <div class="btnGroup">
      <div class="btn publish" @click="handlePublish">发布</div>
      <div class="btn clear" @click="handleClear">清空</div>
    </div>
  </div>
</template>

<script>
import { getAddLabel } from "@/apis/label";
import E from "wangeditor";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
export default {
  mounted() {
    this.editor = new E(this.$refs["write-container"]);
    this.editor.config.height = 500;
    this.editor.config.zIndex = 100;
    this.editor.config.uploadImgMaxSize = 2 * 1024 * 1024;
    this.editor.config.uploadImgAccept = ["jpg", "jpeg", "png", "gif"];
    this.editor.config.uploadImgMaxLength = 1;
    // 上传图片的header
    this.editor.config.uploadImgHeaders = {
      Accept: "text/x-json",
      a: 100,
    };
    this.editor.highlight = hljs;
    this.editor.config.showLinkImg = false;
    this.editor.config.menus = [
      "head",
      "bold",
      "fontSize",
      "fontName",
      "italic",
      "underline",
      "strikeThrough",
      "indent",
      "lineHeight",
      "foreColor",
      "backColor",
      "link",
      "list",
      "todo",
      "justify",
      "quote",
      "emoticon",
      "image",
      "table",
      "code",
      "splitLine",
      "undo",
      "redo",
    ];
    this.editor.create();
  },
  created(){
    this.getAllLabelFun()
  },
  data() {
    return {
      imageUrl: "",
      imgType: [".png", ".jpg", ".gif"],
      options: [],
      labelValue: "",
      content:"",
      input: "",
      textarea: "",
    };
  },
  methods: {
    goBack() {
      this.$router.push({
        name: "Book",
      });
    },
    // 图片上传成功钩子
    handleCoverSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    // 图片上传之前的狗子
    beforeCoverUpload(file) {
      console.log(file);
      //   const isJPG = file.type === "image/jpeg";
      //   const isLt2M = file.size / 1024 / 1024 < 2;

      //   if (!isJPG) {
      //     this.$message.error("上传头像图片只能是 JPG 格式!");
      //   }
      //   if (!isLt2M) {
      //     this.$message.error("上传头像图片大小不能超过 2MB!");
      //   }
      //   return isJPG && isLt2M;
    },
    // 清除内容
    handleClear() {
      this.editor.txt.clear();
    },
    // 发布文章
    handlePublish(){
      this.content = this.editor.txt.html()
      // 开启加载动画
      // 调用接口
      // 跳转页面
      // 关闭加载动画
    },
    getAllLabelFun() {
      getAddLabel().then(res => {
        this.options = res.data
      })
    },
  },
};
</script>

<style lang="less" scoped>
.write {
  position: relative;
  padding: 20px;
  .write-top {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    margin-bottom: 10px;
    .top-left {
      padding-left: 20px;
      width: 40%;
      box-sizing: border-box;
      p {
        color: #999;
        font-size: 14px;
      }
    }
    .top-right {
      padding: 20px;
      box-sizing: border-box;
      width: 60%;
      .article-title {
        width: 300px;
        margin-left: 50px;
      }
      .label-select {
        width: 150px;
      }
      div.dec {
        width: 600px;
        height: 50%;
        margin-top: 20px;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid rgb(175, 173, 173);
        color: rgb(175, 173, 173);
      }
    }
  }
  .write-header {
    margin-bottom: 20px;
  }
  .el-upload {
    border: 1px dashed red;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-left: 10px;
  }
  .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #409eff;
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }
  .avatar {
    width: 150px;
    height: 150px;
    display: block;
  }
  .btnGroup {
    width: 120px;
    height: 60px;
    position: fixed;
    bottom: 100px;
    right: 50px;
    z-index: 9999;
    .btn {
      color: #fff;
      font-weight: 700;
      cursor: pointer;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      text-align: center;
      line-height: 60px;
    }
    .publish {
      margin-bottom: 20px;
      background-color: tomato;
    }
    .clear {
      color: #409eff;
      background-color: greenyellow;
    }
  }
}
</style>
