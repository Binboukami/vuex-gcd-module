export default {
	getTime: (state) => {
		return state.globalCountdown.event;
	},
	getOptions: (state) => {
		return state.globalCountdown.options;
	},
	getFormatedTime: (state) => {
		return state.globalCountdown.event.formated_date;
	},
};
