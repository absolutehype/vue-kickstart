import Vue from 'vue';
import httpProviderInstance from '../httpProviderInstance';

export default function () {
	Vue.$ofsCrud.registerTransport({ name: 'http', fn: () => httpProviderInstance });
	Vue.$ofsCrud.addResource({
		name: 'order',
		options: { namespaced: true }
	});
}
