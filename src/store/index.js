import Vue from "vue";
import Vuex from "vuex";
import user from "@/store/user";
import plb from "@/store/plb";
import inventory from "@/store/inventory";
import masterUser from "@/store/masterUser";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    plb,
    inventory,
    masterUser
  },
});
