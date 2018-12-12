import List from './OrderList';
import Add from './OrderAdd';

const routes = [
	{
		path: '/orders',
		name: 'orders',
		component: { template: '<router-view/>' },
		children: [
			{
				name: 'orders.list',
				path: 'list',
				component: List
			},
			{
				title: 'Create new Order',
				name: 'orders.add',
				path: 'add',
				component: Add
			}
		]
	}
];

export default routes;
