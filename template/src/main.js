import Vue from 'vue';
import OfsMenu from '@oneflow/ofs-vue-layout';
import '@oneflow/ofs-vue-layout/dist/index.css';
import store from './vuex';
import router, { menuStructure } from './router';
import App from './App';
import './assets/style/index.scss';
import './assets/style/app.css';

Vue.config.productionTip = false;
Vue.use(OfsMenu, { router, store, menu: menuStructure });


// Dynamic menu update, example:
store.dispatch('menu/updateMenu', {
	path: '0.items.0.items',
	content: [{ name: 'newPage', title: 'Added dynamically' }],
	updateMethod: 'concat'
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});
