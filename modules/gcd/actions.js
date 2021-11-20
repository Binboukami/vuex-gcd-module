export default {
	updateTime({ commit }) {
		commit("updateTime");
	},
	processTime({ commit, dispatch, getters }) {
		let gcd = getters.getTime;
		return dispatch("updateTime").then(() => {
			commit("processTime", {
				expiration_date: gcd.expiration_date,
				date: gcd.date,
			});
		});
	},
};
