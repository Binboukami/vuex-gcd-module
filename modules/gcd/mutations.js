export default {
  setUserTime(state) {
    state.gcd.user.current_date = new Date();
  },
	setRemainingTime(state, payload) {
		state.gcd.current_event.remaining_time = payload.event_date - payload.current_date;
	},
    const config = state.gcd.configuration;
    const fdate = state.gcd.current_event.display_date;

    //calculates remaining time between actual and expiration date
    current_event.remaining_time = payload.event_date - payload.current_date;

    //main function loop
    if (current_event.remaining_time > 0) {
      current_event.status = true;
      let tx = 24;
      const udate = Object.keys(fdate);

      //Formats time and store values in current_event.formated_date{}
      udate.forEach((t) => {
        if (t == "min" || t == "sec") {
          tx = 60;
        }
        fdate[t] = Math.floor(
          (current_event.remaining_time / config.definitions.date[t]) % tx
        ).toString();
        if (fdate[t].length < 2) {
          fdate[t] = "0" + fdate[t];
        }
      });

      //Your custom code here
    } else {
      current_event.status = false;
      clearInterval(state.gcd.configuration.interval.ref);
    }
  },
};
