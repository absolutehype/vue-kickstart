export const SET_LANGUAGE =
	(state, { language }) => {
		state.lang = language;
	};

export const SET_TOKENS =
	(state, { language }) => {
		state.tokens = [];
		console.log(language);
	};
