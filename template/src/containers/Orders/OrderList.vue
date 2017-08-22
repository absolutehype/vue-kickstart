<template>
	<DefaultLayout>
		<table class="table table-hover">
			<thead>
			<tr>
				<th>Firstname</th>
				<th>Lastname</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>Bob</td>
				<td>Marley</td>
			</tr>
			<tr>
				<td>Bob</td>
				<td>Marley</td>
			</tr>
			<tr>
				<td>Bob</td>
				<td>Marley</td>
			</tr>
			</tbody>
		</table>
	</DefaultLayout>
</template>

<script type="text/javascript">
	import { mapActions } from 'vuex';
	import DefaultLayout from '../../components/DefaultLayout';

	export default {
		components: {
			DefaultLayout
		},
		mounted() {
			this.find();
		},
		methods: {
			...mapActions('order', ['find'])
		}
	};
</script>
