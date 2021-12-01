export default {
  updateTime({ commit }) {
    commit("updateTime");
  },
  processTime({ commit, dispatch, getters }) {
    let gcd = getters.$currentEvent;
    let usr = getters.$user;
    
    return dispatch("updateTime").then(() => {
      commit("processTime", {
        event_date: gcd.event_date,
        current_date: usr.current_date,
      });
    });
  },
};
