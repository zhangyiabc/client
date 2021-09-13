<template>
  <div class="login-body">
    <!-- <transition name="el-zoom-in-top"> -->
    <el-collapse-transition>
      <div
        class="login-container"
        v-loading="isLoginLoading"
        element-loading-text="玩命加载中……"
        element-loading-background="transparent"
        v-if="isLogin"
      >
        <div class="left-container">
          <div class="title">
            <span>登录</span>
          </div>
          <div class="input-container">
            <el-form
              label-width="110px"
              :model="loginForm"
              :rules="loginRules"
              ref="login-form"
              class="login-form"
            >
              <el-form-item label="用户名:" prop="username">
                <el-input
                  type="text"
                  v-model="loginForm.username"
                  placeholder="请输入用户名"
                />
              </el-form-item>
              <el-form-item label="密码:" prop="password">
                <el-input
                  type="password"
                  v-model="loginForm.password"
                  autocomplete="off"
                  placeholder="请输入密码"
                />
              </el-form-item>
            </el-form>
          </div>
          <div class="message-container">
            <span>没有账号？点击右上角注册</span>
          </div>
        </div>
        <div class="right-container">
          <div class="regist-container">
            <span class="regist" @click="handleTurn">注册</span>
            <div class="line"></div>
          </div>
          <div class="actoin-container">
            <span @click="handleInto('login-form')">提交</span>
          </div>
        </div>
      </div>
    </el-collapse-transition>

    <!-- </transition> -->
    <!-- 注册 -->
    <!-- <transition name="el-zoom-in-top"> -->
    <el-collapse-transition>
      <div
        class="register-container login-container"
        v-loading="isLoginLoading"
        element-loading-text="玩命加载中……"
        element-loading-background="transparent"
        v-if="!isLogin"
      >
        <div class="left-container">
          <div class="title">
            <span>注册</span>
          </div>
          <div class="input-container">
            <el-form
              ref="register-form"
              label-width="110px"
              :model="registerForm"
              :rules="rules"
              class="login-form"
            >
              <el-form-item label="昵称:" prop="author">
                <el-input
                  type="text"
                  v-model="registerForm.author"
                  placeholder="请输入昵称"
                />
              </el-form-item>
              <el-form-item label="用户名:" prop="username">
                <el-input
                  type="text"
                  v-model="registerForm.username"
                  placeholder="请输入用户名"
                />
              </el-form-item>
              <el-form-item label="密码:" prop="password">
                <el-input
                  type="password"
                  v-model="registerForm.password"
                  autocomplete="off"
                  placeholder="请输入密码"
                />
              </el-form-item>
              <el-form-item label="确认密码:" prop="checkPass">
                <el-input
                  type="password"
                  v-model="registerForm.checkPass"
                  placeholder="请确认密码"
                />
              </el-form-item>
            </el-form>
          </div>
          <div class="message-container">
            <span>已有账号？点击右上角登录</span>
          </div>
        </div>
        <div class="right-container">
          <div class="regist-container">
            <span class="regist" @click="handleTurn">登录</span>
            <div class="line"></div>
          </div>
          <div class="actoin-container">
            <span @click="handleInto('register-form')">提交</span>
          </div>
        </div>
      </div>
    </el-collapse-transition>
    <!-- </transition> -->
  </div>
</template>

<script>
// 引入接口、仓库
import { register } from "@/apis/user.js";
import store from "@/store";
export default {
  created(){
    const type = this.$route.params.type || "login"
    if(type == "login"){
      this.isLogin = true
    }else{
      this.isLogin = false
    }
  },
  data() {
    const checkAuthor = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("昵称不能为空"));
      }
      callback();
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
        const result = reg.test(value);
        if (result) {
          callback();
        } else {
          console.log(value);
          return callback(
            new Error(
              "密码必须包含一个大写字母，一个小写字母，一个数字，一个特殊字符，8位以上"
            )
          );
        }
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      isLogin: true,
      isLoginLoading: false,
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        author: "",
        username: "",
        password: "",
        checkPass: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        author: [{ validator: checkAuthor, trigger: "blur" }],
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
      loginRules: {
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleCancel() {
      this.$router.push({
        path: "/",
      });
    },
    registerFun(data) {
      // 加载动画开始
      // 调用接口
      // 加载动画结束
      this.isLoginLoading = true;
      register(data)
        .then((res) => {
          this.isLoginLoading = false;
          if (+res.code == 200) {
            this.$message({
              type: "success",
              message: "注册成功",
            });
          } else {
            this.$message({
              type: "error",
              message: "注册成功",
            });
          }
        })
        .catch((err) => {
          this.$message({
            type: "error",
            message: err,
          });
        });
    },
    handleTurn() {
      this.isLogin = !this.isLogin;
    },
    handleInto(type) {
      this.$refs[type].validate((valid) => {
        if (valid) {
          if (type === "login-form") {
            this.isLoginLoading = true;
            store.dispatch("user/login", this.loginForm).then((res) => {
              this.isLoginLoading = false;
              if (+res.code == 200) {
                this.$message({
                  type: "success",
                  message: "登录成功",
                });
                this.$router.push({
                  path: "/",
                });
              }
            });
          } else if (type === "register-form") {
            // 提交登录信息
            // 跳转到登录页面
            this.registerFun(this.registerForm);
            this.handleTurn();
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-body {
  position: relative;
  width: 100%;

  height: 100%;
  box-sizing: border-box;
  background-image: linear-gradient(
    to bottom right,
    rgb(114, 135, 254),
    rgb(130, 88, 186)
  );
}

.login-container,
.register-container {
  transition: 0.8s;
  position: absolute;
  width: 600px;
  height: 315px;
  border-radius: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 50px 0px rgb(59, 45, 159);
  background-color: rgb(95, 76, 194);
}

.login-container .left-container {
  display: inline-block;
  width: 330px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 60px;
  height: calc(100% - 120px);
  // box-sizing: border-box;
  background-image: linear-gradient(
    to bottom right,
    rgb(118, 76, 163),
    rgb(92, 103, 211)
  );
}

.login-container .left-container .title {
  color: #fff;
  font-size: 18px;
  font-weight: 200;
}

.login-container .left-container .title span {
  border-bottom: 3px solid rgb(237, 221, 22);
}

.login-container .left-container .input-container {
  padding: 20px 0;
}

.login-container .left-container .input-container input {
  border: 0;
  background: none;
  outline: 0;
  color: #fff;
  margin: 20px 0;
  display: block;
  width: 100%;
  padding: 5px 0;
  transition: 0.2s;
  border-bottom: 1px solid rgb(199, 191, 219);
}

.login-container .left-container .input-container input:hover {
  border-bottom-color: #fff;
}

::-webkit-input-placeholder {
  color: rgb(199, 191, 219);
}

.login-container .left-container .message-container {
  height: 17px;
  font-size: 14px;
  transition: 0.2s;
  color: rgb(199, 191, 219);
  cursor: pointer;
}

.login-container .left-container .message-container:hover {
  color: #fff;
}

.login-container .right-container {
  width: 145px;
  display: inline-block;
  height: calc(100% - 120px);
  vertical-align: top;
  padding: 60px 0;
}

.login-container .right-container .regist-container {
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 200;
}

.regist-container {
  overflow: hidden;
  height: 28px;
  text-align: center;
}

.login-container .right-container .regist-container span {
  cursor: pointer;
}

.login-container .right-container .regist-container div.line {
  height: 3px;
  width: 28px;
  margin-top: 8px;
  margin: 0 auto;
  transform: translateY(5px);
  background-color: rgb(237, 221, 22);
  transition: 0.2s;
}

.login-container .right-container .regist-container:hover div.line {
  // background-color: rgb(237, 221, 22);
  // height: 3px;
  transform: translateY(0px);
  // // margin-left: 100px;
}

.login-container .right-container .actoin-container {
  font-size: 10px;
  color: #fff;
  height: 100%;
  position: relative;
}

.login-container .right-container .actoin-container span {
  border: 1px solid rgb(237, 221, 22);
  padding: 10px;
  display: inline;
  line-height: 25px;
  border-radius: 25px;
  position: absolute;
  bottom: 10px;
  left: calc(72px - 25px);
  transition: 0.2s;
  cursor: pointer;
  font-weight: 700;
}

.login-container .right-container .actoin-container span:hover {
  background-color: rgb(237, 221, 22);
  color: rgb(95, 76, 194);
}

.login-form {
  margin-left: -50px;
  /deep/ label {
    color: #fff;
  }
  /deep/ input {
    border-radius: 0;
    // background-color: transparent;
    border: 0;
    background: none;
    outline: 0;
    color: #fff;
    // margin: 20px 0;
    display: block;
    width: 100%;
    padding: 5px 0;
    transition: 0.2s;
    border-bottom: 1px solid rgb(199, 191, 219);
  }
  .el-form-item {
    margin-top: 15px;
  }
}

.register-container {
  height: 450px;
  .left-container {
    height: calc(100% - 120px);
    // box-sizing: border-box;
  }
  .right-container {
    height: calc(100% - 120px);
  }
}
</style>
