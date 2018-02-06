import Vue from 'vue';
import OfsMenu from '@oneflow/ofs-vue-layout';
import BootstrapVue from 'bootstrap-vue';
import '@oneflow/ofs-vue-layout/dist/index.css';
import VueI18n from 'vue-i18n';
import axios from 'axios';
import store from './vuex';
import router, { menuStructure } from './router';
import App from './App';
import messages from './lang/index';

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

function setI18nLanguage(lang) {
	i18n.locale = lang;
	axios.defaults.headers.common['Accept-Language'] = lang;
	document.querySelector('html').setAttribute('lang', lang);
	return lang;
}

export function loadLanguageAsync(lang) {
	return axios.get(`https://s3-eu-west-1.amazonaws.com/oneflow-public/locales/production/${lang}.json`, {
		params: {
			headers: {
				'Content-Type':
					'application/x-www-form-urlencoded'
			}
		}
	}).then(msgs => {
		console.log('msgs.data is ', msgs.data);
		i18n.setLocaleMessage(lang, msgs.data);
		// loadedLanguages.push(lang);
		return setI18nLanguage(lang);
	});
	return Promise.resolve(setI18nLanguage(lang));

	return Promise.resolve(lang);
}

router.beforeEach((to, from, next) => {
	const lang = 'es-ES';
	console.log('to.params are ', to.params.lang);
	loadLanguageAsync(lang).then(() => next());
});

const i18n = new VueI18n({
	locale: 'en', // set locale
	messages: messages
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
