import { defineStore } from "pinia";
export default defineStore("index", {
  // 相当于data
  state: () => {
    return {
      counter: 0,
      name: "Eduardo",
    };
  },
  // 相当于计算属性
  getters: {
    doubleCount: (state) => {
      return state.counter * 2;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
    randomizeCounter() {
      setTimeout(() => {
        this.counter = Math.round(100 * Math.random());
      }, 0);
    },
  },
});
