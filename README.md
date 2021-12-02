# Global Countdown

### Use cases
- Create custom events with reactive components based on user acess time and date
- Enable your users to have a more consistent experience by building your application around UTC-0
- And more!

## Features
- Global Countdown based on UTC;
- Options property that allows customization on time precision, performance and how date is displayed
- And more to come!!


## Setup
**Requirements**:
- VueJS: ^2.6.11
- Vuex: ^3.4.0

**Setting up**

The Vuex Global Countdown module is easy to implement like any other vuex module.
Just drop the `gcd` folder inside your project vuex `store` and and import it in your `store/index.js`

This assumes your project follows a similar structure:
+ src
    + ...
	+ store
		 * modules
		 	* myModule
		 	* gcd
		 * index.js

In your **store/index.js**:

```bash
import Vue from "vue";
import Vuex from "vuex";

import gcd from "./modules/gcd";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		gcd,
	},
});
```

## Implementation

### Overview
In order to keep time consistent across multiple use cases, GCD is set around UTC (Cordinated Universal Time) through the property values in the event obj `expiration_date: new Date(Date.UTC()` and `date: new Date()`.

For more information on how these functions work, refer to [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC).

## Basic usage and examples
#### Dynamicaly update links:

In this example, the module request an url if the **current_event** status is `true` and stores in a variable acessible to the vue component.


In your `store/index.js`

```javascript
state:{ href: '' },
getters:{
  $getHref: (state) => {
    return state.hrefs;
  },
}
mutations: {
	hrefChange(payload){
		let gcd = this.state.gcd.gcd
		if (gcd.current_event.status){
			this.state.hrefs = payload.href
		}
	},
},
actions: {
	async hrefChange({ commit }){
		await axios.get('https://gcd.api/hrefs').then(res => {
			commit("hrefChange", { href: res.data });
		})
	},
},
```

In your `App.vue`

```javascript
mounted(){
	this.hrefChange();
}
```
Then in your vue component

```html
<template>
  <button href="$getHref">
      <slot>Button</slot>
  </button>
</template>
```
```javascript
  computed:{
    ...mapGetters(["$getHref"])
  }
```

## Getters, Mutations and Actions
List of available getters, mutations and actions

#### Getters
Getters usually have the same name as the object they retrieve, just instead being formated in `camelCase`.

`$gcd`: Returns the gdc module object;

`$user`: Returns the user object;

`$currentEvent`: Returns the current_event object;

`$events`: Returns the events array. Stores events objects;

`$config`: Return the configuration object;

##### Utils

`$displayDate`: Returns the current event's formatted date. Default as `WW/DD/HH/MM/SS`

#### Mutations
`mutation(state)`:

#### Actions
`action(state)`: