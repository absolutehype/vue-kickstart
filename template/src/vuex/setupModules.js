import Vue from 'vue';
import OfsCrud from '@oneflow/ofs-vuex-crud';
import httpProviderInstance from './httpProviderInstance';
import registerOrdersModule from './orders';

const setupModules = store => {
	Vue.use(OfsCrud, { store });
	Vue.$ofsCrud.registerTransport({ name: 'http', fn: () => httpProviderInstance });
	registerOrdersModule();
};

export default setupModules;
