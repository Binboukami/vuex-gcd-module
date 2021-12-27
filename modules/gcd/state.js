export default {
  gcd: {
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
        id: "event_A",
        description: "Event_A happens when x conditions are met",
        date: null,
      },
      {
        id: "event_B",
        description: "Event_B happens when y conditions are met",
        date: null,
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
