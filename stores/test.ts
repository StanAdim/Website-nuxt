import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0, name: 'adim' }),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })