import axios from 'axios';

/* eslint-disable arrow-body-style */
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
	const localLang = JSON.parse(window.localStorage.getItem('vuex')).lang.lang;
	const lang = localLang || 'en-GB';
	commit('SET_LANGUAGE', { lang });
};
