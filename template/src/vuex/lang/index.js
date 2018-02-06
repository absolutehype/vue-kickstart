import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

const state = {
	lang: JSON.parse(window.localStorage.getItem('vuex')).lang.lang || 'en-GB',
	tokens: []
};

const langStore = {
	state,
	getters,
	actions,
	mutations
};

export default langStore;
