import Vue from 'vue';

const setupMiddleware = store => {
	Vue.$ofsCrud.addMiddleware('pre', (args, next) => {
		// args.headers = { Authorization: `Bearer ${token}` };
		/* if (accountId) {
			args.headers['x-oneflow-accountid'] = accountId;
		} */
		next();
	});

	Vue.$ofsCrud.addMiddleware('post', (args, next) => {
		if (args.response && [401, 403].includes(args.response.status)) {
			store.dispatch('logout');
		}
		next();
	});
};

export default setupMiddleware;
