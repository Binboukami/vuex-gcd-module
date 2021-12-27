export default {
  setUserTime({ commit }) {
    commit("updateTime");
  },
  setRemainingTime({ commit, dispatch, getters }){
    let gcd = getters.$currentEvent;
    let usr = getters.$user;

    return dispatch("setUserTime").then(() => {
      commit("setRemainingTime", { event_date: gcd.event_date, current_date: usr.current_date });
    })
  },
    });
  },
};
