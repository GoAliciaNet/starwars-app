import {  useEffect } from 'react'
import { useFavoriteContext } from '../context/Favorites/FavoriteContext'
import { useCharacterContext } from '../context/Characters/CharacterContext'

const Favoritos = () => {
    
    const {characters, getCharacters } = useCharacterContext();
    const { favorites, getFavorites } = useFavoriteContext();

    useEffect(() => {
        getCharacters();
        getFavorites();
     }, [])

    const favoriteCharacters = characters.filter(function(element){
        return favorites.includes(element.name)
    })

    return(
        <div className='container'>
        {favoriteCharacters.length > 0 ?
        <div className='row'>
        {favoriteCharacters.map(character => (
            <div className='col-md-6' key={character.name}>
                <div className="card">
                <div className="card-header">
                <h2>Nombre: {character.name}</h2>
                 </div>
                    <div className="card-body">
                        
                        <h5>Estatura: {character.height}</h5>
                        <h5>Peso: {character.mass}</h5>
                        <h5>Año de nacimiento{character.birth_year}</h5>
                    </div>
                </div>
            </div>
            ))}   
        </div> :
         <div className='row'>
             <div className='col-md-12'>
                 <div className="card">
                 <div className="card-header">
                    <h2>No hay datos para mostrar. Agrega personajes favoritos a tu lista</h2>
                 </div>
                 </div>
                 </div>
                 </div>
        }
    </div>
    )
}
export default Favoritos