<template>
	<DefaultLayout>
		<ContentHeader title="Order list"></ContentHeader>
		<b-container fluid class="p-3">
			<b-table class="table-lg mb-0 align-middle" bordered :items="items" :fields="fields">
				<template slot="waiting" slot-scope="data">
					<span class="h4">
						<b-badge variant="success">{{ data.item.waiting }}</b-badge>
					</span>
				</template>
				<template slot="due" slot-scope="data">
					<span class="h4">
						<b-badge variant="warning">{{ data.item.due }}</b-badge>
					</span>
				</template>
				<template slot="overdue" slot-scope="data">
					<span class="h4">
						<b-badge variant="danger">{{ data.item.overdue }}</b-badge>
					</span>
				</template>
			</b-table>
		</b-container>
	</DefaultLayout>
</template>

<script type="text/javascript">
	import { Breadcrumb, ContentHeader } from '@oneflow/ofs-vue-layout';
	import DefaultLayout from '../../components/DefaultLayout';

	const fields = [
		{ key: 'name', sortable: true },
		{ key: 'batches', sortable: true },
		{ key: 'waiting', sortable: true },
		{ key: 'due', sortable: true },
		{ key: 'overdue', sortable: true }
	];
	const items = [
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
		},
		{
			name: 'Assembly',
			batches: 1,
			waiting: 0,
			due: 0,
			overdue: 1
		},
		{
			name: 'Print 200',
			batches: 4,
			waiting: 0,
			due: 0,
			overdue: 4
		},
		{
			name: 'Component Assembly',
			batches: 12,
			waiting: 0,
			due: 0,
			overdue: 12
		},
		{
			name: 'Step 2',
			batches: 38,
			waiting: 0,
			due: 0,
			overdue: 38
		},
		{
			name: 'Case Bind',
			batches: 1,
			waiting: 1,
			due: 0,
			overdue: 1
		},
		{
			name: 'Laminate',
			batches: 17,
			waiting: 0,
			due: 0,
			overdue: 17
		},
		{
			name: 'Step 3',
			batches: 10,
			waiting: 10,
			due: 0,
			overdue: 10
		},
		{
			name: 'Step 4',
			batches: 19,
			waiting: 0,
			due: 0,
			overdue: 19
		},
		{
			name: 'Step 1',
			batches: 943,
			waiting: 0,
			due: 0,
			overdue: 943
		},
		{
			name: 'Step 6',
			batches: 7,
			waiting: 0,
			due: 0,
			overdue: 7
		},
		{
			name: 'Step 5',
			batches: 68,
			waiting: 0,
			due: 0,
			overdue: 68
		}
	];
	export default {
		components: {
			Breadcrumb,
			ContentHeader,
			DefaultLayout
		},
		data: () => ({
			items,
			fields
		})
	};
</script>
