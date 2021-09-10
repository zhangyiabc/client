// 存储用户信息的 仓库
import { getItem, setItem, removeItem } from "@/utils/storage";

const TOKEN = "token";

export default {
  namespaced: true,
  state: {
    authorization: getItem(TOKEN),
    userInfo: {},
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data;
    },
    // 设置token
    setToken(state, data) {
      state.authorization = data;
      setItem(TOKEN,data)
    },
    // 移除token
    removeToken(state, data) {
      state.authorization = ''
      removeItem(TOKEN)
    },
  },
  actions: {
    // 登录
    async login({ commit }, username, password) {
      // commit()
      // 调用登录的接口
      // 将用户信息写入仓库
      // 返回用户信息
    },
    // 登出
    loginOut({ commit }) {
      commit("setUserInfo", null);
    },
    // whoami
    // 利用token换用户信息
  },
};
