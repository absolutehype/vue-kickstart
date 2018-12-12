import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';
import menuStructure from './menuStructure';

Vue.use(Router);

export default new Router({
	routes: [...routes]
});

export { routes, menuStructure };
