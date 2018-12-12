import Vuex from 'vuex';
import 'jest-dom/extend-expect';
import { createLocalVue, mount } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import OfsMenu from '@oneflow/ofs-vue-layout';
import OrderList from '../../../../src/containers/Orders/OrderList';

describe('OrderList', () => {
	const localVue = createLocalVue();
	localVue.use(Vuex);
	localVue.use(BootstrapVue);
	const store = new Vuex.Store({
		state: { menu: {} }
	});

	const router = { beforeEach: () => {} };

	localVue.use(OfsMenu, { router, store, menu: [] });

	// Now mount the component and you have the wrapper
	const wrapper = mount(OrderList, {
		localVue,
		stubs: ['DefaultLayout'],
		data: () => ({
			fields: [
				{ key: 'name', sortable: true },
				{ key: 'batches', sortable: true },
				{ key: 'waiting', sortable: true },
				{ key: 'due', sortable: true },
				{ key: 'overdue', sortable: true }
			],
			items: [
				{
					name: 'Print 100',
					batches: 15,
					waiting: 10,
					due: 0,
					overdue: 5
				},
				{
					name: 'Guillotine',
					batches: 38,
					waiting: 0,
					due: 0,
					overdue: 1
				}
			]
		}),
		store
	});

	it('should render 2 rows', async () => {
		expect(wrapper.findAll('tbody tr').length).toBe(2);
	});

	it('should render the correct table headers', async () => {
		expect(wrapper.findAll('thead th').at(0).html()).toMatch(/name/i);
		expect(wrapper.findAll('thead th').at(1).html()).toMatch(/batches/i);
		expect(wrapper.findAll('thead th').at(2).html()).toMatch(/waiting/i);
		expect(wrapper.findAll('thead th').at(3).html()).toMatch(/due/i);
		expect(wrapper.findAll('thead th').at(4).html()).toMatch(/overdue/i);
	});
});
