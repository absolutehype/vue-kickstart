export const setLanguage = ({ commit, dispatch }, { language }) => {
	console.log('lang in actions is ', language);
	commit('SET_LANGUAGE', { language });
	commit('SET_TOKENS', { language });
};

export const getLanguage = ({ commit }) => {
	const language = 'en';
	commit('SET_LANGUAGE', { language });
	commit('SET_TOKENS', { language });
};
