import Home from './Home';
import HpModePage from './HpModePage';

const routes = [
	{
		path: '/',
		redirect: '/home',
		name: 'app',
		component: { template: '<router-view/>' },
		children: [
			{
				name: 'home',
				path: '/home',
				component: Home
			},
			{
				name: 'hpModePage',
				path: '/hpModePage',
				component: HpModePage
			}
		]
	}
];

export default routes;
