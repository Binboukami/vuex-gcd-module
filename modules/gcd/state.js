export default {
	globalCountdown: {
		event: {
			id: "",
			expiration_date: new Date(Date.UTC(2021, 10, 20, 22, 0)),
			date: null,
			remaining_time: null,
			active: false,
			formated_date: {
				days: null,
				hours: null,
				min: null,
				sec: null,
			},
		},
		options: {
			controler: null, //Control variable to access setInterval() in the vue component
			updateInterval: 30000, //Sets the value of setInterval()
			properties: {
				formated_date: {
					days: 1000 * 60 * 60 * 24,
					hours: 1000 * 60 * 60,
					min: 1000 * 60,
					sec: 1000,
				},
			},
		},
	},
};
