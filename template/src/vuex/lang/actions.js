export const setLanguage = ({ commit, dispatch }, { language }) => {
	commit('SET_LANGUAGE', { language });
	commit('SET_TOKENS', { language });
};

export const getLanguage = ({ commit }) => {
	console.log('inside actions');
	const localLang = JSON.parse(window.localStorage.getItem('vuex')).lang.lang;
	console.log('localLang is ', localLang);
	const language = localLang || 'en';
	commit('SET_LANGUAGE', { language });
	commit('SET_TOKENS', { language });
};
