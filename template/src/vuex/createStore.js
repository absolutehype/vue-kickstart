import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import langStore from './lang';

const createStore = () => {
	Vue.use(Vuex);
	return new Vuex.Store({
		modules: { lang: langStore },
		plugins: [createPersistedState({ paths: ['lang'] })]
	});
};

export default createStore;
