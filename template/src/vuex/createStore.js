import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const createStore = () => {
	Vue.use(Vuex);
	return new Vuex.Store({
		plugins: [createPersistedState({ paths: ['lang.lang'] })]
	});
};

export default createStore;
