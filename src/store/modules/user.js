// 存储用户信息的 仓库
import { getItem, setItem, removeItem } from "@/utils/storage";
import { login,whoami } from "@/apis/user";
import Cookies from "js-cookie";
const TOKEN = "token";

export default {
  namespaced: true,
  state: {
    authorization: getItem(TOKEN) || Cookies.get("token"),
    userInfo: {},
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data;
      setItem("user", data)
    },
    // 设置token
    setToken(state, data) {
      state.authorization = data;
      setItem(TOKEN, data);
    },
    // 移除token
    removeToken(state, data) {
      state.authorization = data;
      removeItem(TOKEN);
    },
  },
  actions: {
    // 登录
    async login({ commit }, data) {
      // commit()
      // console.log(data)
      const result = await login(data)
      commit("setUserInfo", result.data)
      // 调用登录的接口
      // 将用户信息写入仓库
      // 返回用户信息
      return result
    },
    // 登出
    loginOut({ commit }) {
      commit("setUserInfo", null);
      commit("removeToken", "");
    },
    // whoami
    // 利用token换用户信息
    async whoAmI({ commit }) {
      const userInfo = await whoami()
      if(typeof userInfo.data == "object"){
        sessionStorage.setItem("AdminId",userInfo.data.id)
        commit("setUserInfo",userInfo.data)
      }
    }
  },
};
