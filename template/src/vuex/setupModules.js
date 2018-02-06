import Vue from 'vue';
import OfsCrud from '@oneflow/ofs-vuex-crud';
import httpProviderInstance from './httpProviderInstance';
import registerOrdersModule from './orders';
import registerLangStoreModule from './lang';

const setupModules = (store, i18n) => {
	Vue.use(OfsCrud, { store });
	Vue.$ofsCrud.registerTransport({ name: 'http', fn: () => httpProviderInstance });
	registerLangStoreModule(store, i18n);
	registerOrdersModule();
};

export default setupModules;
