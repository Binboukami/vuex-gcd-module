export default {
  updateTime(state) {
    state.gcd.user.current_date = new Date();
  },
  processTime(state, payload) {
    //local variables
    const event = state.gcd.current_event;
    const config = state.gcd.configuration;
    const fdate = state.gcd.current_event.display_date;

    //calculates remaining time between actual and expiration date
    event.remaining_time = payload.event_date - payload.current_date;

    //main function loop
    if (event.remaining_time > 0) {
      event.status = true;
      let tx = 24;
      const udate = Object.keys(fdate);

      //Formats time and store values in event.formated_date{}
      udate.forEach((t) => {
        if (t == "min" || t == "sec") {
          tx = 60;
        }
        fdate[t] = Math.floor(
          (event.remaining_time / config.definitions.date[t]) % tx
        ).toString();
        if (fdate[t].length < 2) {
          fdate[t] = "0" + fdate[t];
        }
      });

      //Your custom code here
    } else {
      event.status = false;
      clearInterval(state.gcd.configuration.interval.ref);
    }
  },
};
