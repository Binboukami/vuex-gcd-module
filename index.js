import Vue from "vue";
import Vuex from "vuex";

//import Modules
import gcd from "./modules/gcd";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		gcd,
	},
});