import axios from 'axios';

export const setLanguage = ({ commit }, { lang }) => {
	return axios.get(`https://s3-eu-west-1.amazonaws.com/oneflow-public/locales/production/${lang}.json`, {
		params: {
			headers: {
				'Content-Type':
					'application/x-www-form-urlencoded'
			}
		}
	}).then(msgs => {
		const tokens = msgs.data;
		commit('SET_LANGUAGE', { lang });
		commit('SET_TOKENS', { tokens });
	});
};

export const getLanguage = ({ commit }) => {
	console.log('inside actions');
	const localLang = JSON.parse(window.localStorage.getItem('vuex')).lang.lang;
	const lang = localLang || 'en';
	commit('SET_LANGUAGE', { localLang });
	// commit('SET_TOKENS', { localTokens });
};
