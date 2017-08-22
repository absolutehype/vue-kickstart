import Vue from 'vue';
import Vuex from 'vuex';

const createStore = () => {
	Vue.use(Vuex);
	return new Vuex.Store({});
};

export default createStore;
