import Vue from 'vue';

export default function () {
	Vue.$ofsCrud.addResource({
		name: 'order',
		options: { namespaced: true }
	});
}
