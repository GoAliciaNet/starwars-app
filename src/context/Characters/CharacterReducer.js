import { GET_CHARACTERS } from '../types';

export default (state, action) => {
	const { payload, type } = action;

	switch (type) {
		case GET_CHARACTERS:
			return {
				...state,
				characters: payload,
			};
	}
};
