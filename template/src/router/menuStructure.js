const menuStructure = [
	{
		title: 'Analytics',
		name: 'app',
		items: [
			{
				title: 'Home Group',
				items: [
					{ title: 'Home', name: 'home' },
					{ title: 'Hp mode', name: 'hpModePage' }
				]
			}
		]
	},
	{
		title: 'Orders',
		name: 'orders',
		items: [
			{
				title: 'Orders',
				items: [
					{ title: 'List', name: 'orders.list', default: true },
					{ title: 'Add', name: 'orders.add' }
				]
			}
		]
	}
];

export default menuStructure;
