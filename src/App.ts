import Vue from 'vue';
import router from './router'
import App from './App';

new Vue({
	el: '#app',
	router,
	components: { App },
	render: h => h('App')
})
