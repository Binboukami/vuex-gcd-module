export default {
	updateTime(state) {
		state.globalCountdown.event.date = new Date();
	},
	processTime(state, payload) {
		//local variables
		const event = state.globalCountdown.event;
		const options = state.globalCountdown.options;
		const fdate = state.globalCountdown.event.formated_date;

		//calculates remaining time between actual and expiration date
		event.remaining_time = payload.expiration_date - payload.date;

		//main function loop
		if (event.remaining_time > 0) {
			event.active = true;
			let tx = 24;
			const udate = Object.keys(fdate);

			//Formats time and store values in event.formated_date{}
			udate.forEach((t) => {
				if (t == "min" || t == "sec") {
					tx = 60;
				}
				fdate[t] = Math.floor((event.remaining_time / options.properties.formated_date[t]) % tx).toString();
				if (fdate[t].length < 2) {
					fdate[t] = "0" + fdate[t];
				}
			});

			//Your custom code here

		} else {
			event.active = false;
			clearInterval(state.globalCountdown.options.controller);
		}
	},
};
