import * as actions from './actions';
import * as mutations from './mutations';

const state = {
	lang: 'en',
	tokens: []
};

const langStore = {
	state,
	actions,
	mutations
};

export default langStore;
