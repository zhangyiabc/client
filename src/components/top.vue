<template>
  <div class="top-container">
    <div class="top">
      <el-row :gutter="30" type="flex" justify="space-around" align="middle">
        <el-col :span="6"
          ><div class="logo">
            <router-link to="/">
              <img height="100%" src="../assets/logo.png" alt="" />
              <span>博客系统</span>
            </router-link>
          </div></el-col
        >
        <el-col :span="2"
          ><div>
            <router-link to="/">首页</router-link>
          </div></el-col
        >
        <el-col :span="8"
          ><div class="search">
            <el-input
              placeholder="代码改变世界"
              v-model="input3"
              suffix-icon="el-icon-search"
              class="input-with-select"
            >
            </el-input>
          </div>
        </el-col>
        <el-col :span="2"
          ><div>
            <router-link to="/home">
              <el-button
                class="edit"
                type="primary"
                size="small"
                icon="el-icon-edit"
                >写文章</el-button
              >
            </router-link>
          </div></el-col
        >
        <el-col :span="4"
          ><div>
            <router-link
              :to="{
                name: 'Login',
                params: {
                  type: 'login',
                },
              }"
            >
              登录
              <i class="el-icon-user"></i>
            </router-link>
            |
            <router-link
              :to="{
                name: 'Login',
                params: {
                  type: 'register',
                },
              }"
              >注册</router-link
            >
          </div></el-col
        >
      </el-row>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input3: "",
    };
  },
  methods: {
    handleSearch() {
      console.log("发生了点击");
    },
  },
};
</script>

<style lang="less" scoped>
.top {
  box-sizing: border-box;
  padding: 0 150px;
  height: 50px;
  background-color: #fff;
  a {
    color: inherit;
    text-decoration: none;
  }
}
.line {
  height: 1px;
  width: 100%;
  background-color: rgb(227, 219, 215);
}
.el-row {
  height: 100%;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  box-sizing: border-box;
  padding: 0;
  div {
    // background: #faa;
    text-align: center;
    height: 100%;
  }
  .logo {
    a {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img {
        height: 40px;
        margin-right: 10px;
      }
    }
    span {
      font-family: "华文楷体";
      font-weight: 700;
    }
  }
}

.search {
  .el-input {
    width: 80%;
    border-radius: 0;
  }
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
