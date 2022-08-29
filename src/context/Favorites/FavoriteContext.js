import { createContext, useContext } from 'react';

const FavoriteContext = createContext();

export const useFavoriteContext = () => {
	return useContext(FavoriteContext);
};

export default FavoriteContext;
