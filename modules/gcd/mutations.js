export default {
	setUserTime(state) {
		state.gcd.user.current_date = new Date();
	},
	setRemainingTime(state, payload) {
		state.gcd.current_event.remaining_time = payload.event_date - payload.current_date;
	},
	setStatus(state) {
		if (state.gcd.current_event.remaining_time > 0) {
			state.gcd.current_event.status = true;
		} else {
			state.gcd.current_event.status = false;
			clearInterval(state.gcd.configuration.interval.ref);
		}
	},
	setDisplayTime(state) {
		const current_event = state.gcd.current_event;
		const display_date = state.gcd.current_event.display_date;
		const config = state.gcd.configuration;

		const arrDisplayDate = Object.keys(display_date);
		let tx = 24;

		arrDisplayDate.forEach((t) => {
			if (t == "min" || t == "sec") {
				tx = 60;
			}
			display_date[t] = Math.floor((current_event.remaining_time / config.definitions.date[t]) % tx).toString();
			if (display_date[t].length < 2) {
				display_date[t] = "0" + display_date[t];
			}
		});
	},
};
