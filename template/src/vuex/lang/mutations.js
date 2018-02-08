export const SET_LANGUAGE =
	(state, { lang }) => {
		if (state) {
			state.lang = lang;
		}
	};

export const SET_TOKENS =
	(state, { tokens }) => {
		if (state) {
			state.tokens = tokens;
		}
	};
