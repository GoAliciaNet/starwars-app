import { createContext, useContext } from 'react';

const CharacterContext = createContext();

export const useCharacterContext = () => {
	return useContext(CharacterContext);
};

export default CharacterContext;
