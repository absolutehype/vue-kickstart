import Vue from 'vue';
import OfsMenu from '@oneflow/ofs-vue-layout';
import BootstrapVue from 'bootstrap-vue';
import '@oneflow/ofs-vue-layout/dist/index.css';
import VueI18n from 'vue-i18n';
import store from './vuex';
import router, { menuStructure } from './router';
import App from './App';

Vue.config.productionTip = false;
Vue.use(OfsMenu, { router, store, menu: menuStructure });
Vue.use(BootstrapVue);
Vue.use(VueI18n);

// Dynamic menu update, example:
store.dispatch('menu/updateMenu', {
	path: '0.items.0.items',
	content: [{ name: 'newPage', title: 'Added dynamically' }],
	updateMethod: 'concat'
});

const messages = {
		en: {
			greeting: 'Hello',
			errorMessage: 'Something went wrong',
			errorTitle: 'Error'
		},
		es: {
			greeting: 'Hola',
			errorMessage: 'Algo salió mal',
			errorTitle: 'Error'
		},
		fr: {
			greeting: 'Bonjour',
			errorMessage: 'Quelque chose s\'est mal passé',
			errorTitle: 'Erreur'
		},
		ch: {
			greeting: '你好',
			errorMessage: '出了些问题',
			errorTitle: '错误'
		}
	}
;

const i18n = new VueI18n({
	locale: 'fr', // set locale
	messages
});

/* eslint-disable no-new */
new Vue({
	i18n,
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});
