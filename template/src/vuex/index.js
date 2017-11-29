import createStore from './createStore';
import setupModules from './setupModules';
import setupMiddlewares from './setupMiddlewares';

const store = createStore();

setupModules(store);
setupMiddlewares(store);

export default store;
