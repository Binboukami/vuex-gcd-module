export default {
  setUserTime({ commit }) {
    commit("updateTime");
  },
  processTime({ commit, dispatch, getters }) {
    let gcd = getters.$currentEvent;
    let usr = getters.$user;
    
    return dispatch("setUserTime").then(() => {
      commit("processTime", {
        event_date: gcd.event_date,
        current_date: usr.current_date,
      });
    });
  },
};
