<template>
  <div class="login-container">
    <div class="form-box login" key="login" v-show="isLogin">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button @click="handleCancel">取消</el-button>
        </el-form-item>
      </el-form>
      <span>没有账号，点击 <el-button type="text" @click="isLogin = !isLogin" class="link-register"> 注册</el-button>账号</span>
    </div>
    <div class="form-box register" key="register" v-if="!isLogin">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="昵称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">注册</el-button>
          <el-button @click="handleCancel">取消</el-button>
        </el-form-item>
      </el-form>
      <span>已有账号，<el-button type="text" @click="isLogin = !isLogin" class="link-register">立即登录</el-button></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin:true,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleCancel(){
      this.$router.push({
        path:"/"
      })
    }
  },
};
</script>

<style lang="less" scoped>
.login-container {
  background-color: tomato;
  position: relative;
  width: 100%;
  height: 100%;
  .form-box {
    padding: 20px;
    background-color: #fff;
    width: 50%;
    // height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.link-register{
  font-size: inherit;
}
</style>
