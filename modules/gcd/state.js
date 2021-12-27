export default {
  gcd: {
		user: {
			current_date: null,
			// Other options like prefered date format
		},
		current_event: {
			id: null,
			description: null,
			event_date: null,
			remaining_time: null,
			status: false,
			display_date: {
				weeks: null,
				days: null,
				hours: null,
				min: null,
				sec: null,
			},
		},
		events: [
			{
				id: "event_Zero",
				description: "event_Zero happens when initial conditions are met",
				event_date: new Date(Date.UTC(2021, 11, 28, 21, 0)),
				expiration_date: new Date(Date.UTC(2021, 11, 2, 22, 0))
			},
			{
				id: "event_A",
				description: "Event_A happens when x conditions are met",
				event_date: new Date(Date.UTC(2021, 11, 28, 12, 0)),
				expiration_date: new Date(Date.UTC(2021, 11, 2, 22, 0)),
			},
			{
				id: "event_B",
				description: "Event_B happens when y conditions are met",
				event_date: new Date(Date.UTC(2020, 2, 1, 22, 0)),
				expiration_date: new Date(Date.UTC(2021, 10, 30, 22, 0)),
			},
		],
		configuration: {
			interval: {
				ref: null,
				update: 1000,
			},
			properties: {
				//Things like date formating in DD/MM/YYYY or MM/DD/YYYYY
				//And also stuff related to user/dev preferences
			},
			definitions: {
				date: {
					weeks: 1000 * 60 * 60 * 24 * 7,
					days: 1000 * 60 * 60 * 24,
					hours: 1000 * 60 * 60,
					min: 1000 * 60,
					sec: 1000,
				},
			},
		},
	},
};
