import Vue from 'vue';
import OfsCrud from '@oneflow/ofs-vuex-crud';
import registerOrdersModule from './orders';

const setupModules = store => {
	Vue.use(OfsCrud, { store });
	registerOrdersModule();
};

export default setupModules;
