import { defineStore } from "pinia";
export const UserAuthStore = defineStore('userAuth',{
    state : ()=> ({
        user : {}
    }),
    getters: {
        getAuthUser (state) {state.user}
    },
    actions: {

    }
}) 