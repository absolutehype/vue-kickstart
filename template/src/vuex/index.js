import createStore from './createStore';
import setupModules from './setupModules';

const store = createStore();

setupModules(store);

export default store;
