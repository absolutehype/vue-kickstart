export const SET_LANGUAGE =
	(state, { lang }) => {
		state.lang = lang;
	};

export const SET_TOKENS =
	(state, { tokens }) => {
		state.tokens = tokens;
		console.log('state tokens are ', state.tokens);
	};
