export default {
  $gcd: (state) => {
    return state.gcd;
  },
  $currentEvent: (state) => {
    return state.gcd.current_event;
  },
  $user: (state) => {
    return state.gcd.user;
  },
  $events: (state) => {
    return state.gcd.events;
  },
  $config: (state) => {
    return state.gcd.configuration;
  },
  $displayDate: (state) => {
    return state.gcd.currentEvent.display_date;
  },
};
