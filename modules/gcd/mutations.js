export default {
	setUserTime(state) {
		state.gcd.user.current_date = new Date();
	},
	setRemainingTime(state, payload) {
		state.gcd.current_event.remaining_time = payload.event_date - payload.current_date;
	},
	chkEvents(state) {
		let events = state.gcd.events;

		if (events.length > 0) {
			events.sort((x, y) => {
				return x.event_date - y.event_date;
			});
			//Checks if event is valid, if it isn't, removed it from the queue
			events.forEach((el) => {
				if (el.event_date < state.gcd.user.current_date) {
					events.splice(events.indexOf(el), 1);
				}
			});
			//Sets closest valid event to current event
			state.gcd.current_event.id = events[0].id;
			state.gcd.current_event.description = events[0].description;
			state.gcd.current_event.event_date = events[0].event_date;
		} else {
			console.error(`Vuex GCD | Error: There are no events in 'state.gdc.events'`);
		}
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
