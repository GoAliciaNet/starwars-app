import { useReducer } from 'react';
import CharacterReducer from './CharacterReducer';
import CharacterContext from './CharacterContext';
import axios from 'axios';
import PropTypes from 'prop-types';

const CharacterProvider = props => {
	const initialState = {
		characters: [],
	};

	const [state, dispatch] = useReducer(CharacterReducer, initialState);

	const getCharacters = async page => {
		const res = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
		const allCharacters = [...state.characters, ...res.data.results];

		dispatch({
			type: 'GET_CHARACTERS',
			payload: allCharacters,
		});
	};

	return (
		<CharacterContext.Provider
			value={{
				characters: state.characters,
				getCharacters,
			}}
		>
			{props.children}
		</CharacterContext.Provider>
	);
};

CharacterProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default CharacterProvider;
