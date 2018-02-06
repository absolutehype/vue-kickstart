import Vue from 'vue';
import VueI18n from 'vue-i18n';
import createStore from './createStore';
import setupModules from './setupModules';
import setupMiddlewares from './setupMiddlewares';

Vue.use(VueI18n);

const store = createStore();
export const i18n = new VueI18n({});

setupModules(store, i18n);
setupMiddlewares(store);

export default store;
