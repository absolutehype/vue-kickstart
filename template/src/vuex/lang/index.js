import createActions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

export default function (store, $i18n) {
	const state = {
		lang: JSON.parse(window.localStorage.getItem('vuex')).lang.lang || 'en-GB',
		tokens: []
	};

	const langStore = {
		namespaced: true,
		state,
		actions: createActions($i18n),
		mutations,
		getters
	};

	store.registerModule('lang', langStore);
}
