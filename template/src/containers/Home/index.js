import Home from './Home';
import HpModePage from './HpModePage';
import NewPage from './NewPage';
import Translations from './Translations';

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
			},
			{
				name: 'newPage',
				path: '/new-page',
				component: NewPage
			},
			{
				name: 'translations',
				path: '/translations',
				component: Translations
			}
		]
	}
];

export default routes;
