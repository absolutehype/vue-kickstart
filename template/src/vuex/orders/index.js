import Vue from 'vue';
import httpProviderInstance from '../httpProviderInstance';

export default function () {
	Vue.$ofsCrud.addResource({
		name: 'order',
		provider: () => httpProviderInstance,
		options: { namespaced: true }
	});
}
