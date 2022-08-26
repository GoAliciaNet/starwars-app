import { useReducer } from "react"
import FavoriteReducer from "./FavoriteReducer"
import FavoriteContext from "./FavoriteContext"
import PropTypes from 'prop-types';

const FavoriteProvider = (props) => {
    const initialState = {
        favorites:[],
    }

    const [state, dispatch] = useReducer(FavoriteReducer, initialState)

    const getFavorites =  (favoriteName) =>{
        const isFavorite = state.favorites.includes(favoriteName);
        const favoriteCharacter = isFavorite
            ? state.favorites.filter(favChar => favChar !== favoriteName)     // Delete
            : [...state.favorites, favoriteName] // Add
        console.log(favoriteName)
        dispatch({
            type: 'GET_FAVORITES',
            payload: favoriteCharacter
        })
    }
    
    return (
        <FavoriteContext.Provider value={{
            favorites: state.favorites,
            getFavorites,
        }}>
            {props.children}
        </FavoriteContext.Provider>
    )
    
}
FavoriteProvider.propTypes = {
    children: PropTypes.node.isRequired,
   }

export default FavoriteProvider