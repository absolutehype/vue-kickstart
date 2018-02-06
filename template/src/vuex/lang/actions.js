import axios from 'axios';


export default function createActions($i18n) {
	/* eslint-disable arrow-body-style */
	const setLanguage = async ({ commit }, { lang }) => {
		const { data } = await axios.get(`https://s3-eu-west-1.amazonaws.com/oneflow-public/locales/production/${lang}.json`);
		const tokens = data;
		$i18n.locale = lang;
		$i18n.setLocaleMessage(lang, tokens);
		document.querySelector('html').setAttribute('lang', lang);
		commit('SET_LANGUAGE', { lang });
		commit('SET_TOKENS', { tokens });
	};

	return { setLanguage };
}
