import { defineStore } from "pinia";
export default defineStore("index", {
  // 相当于data
  state: () => {
    return {
      token: 0,
    };
  },
  // 相当于计算属性
  getters: {
    getToken: (state) => {
      return state.token;
    },
  },
  actions: {
    setToken(token: any) {
      this.token = token;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        // 自定义存储的 key，默认是 store.$id
        // key: "custom storageKey",
        // 可以指定任何 extends Storage 的实例，默认是 sessionStorage
        storage: sessionStorage,
        // state 中的字段名，按组打包储存
        // paths: ["foo", "bar"],
      },
    ],
  },
});
