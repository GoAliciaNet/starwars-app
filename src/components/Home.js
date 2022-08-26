import {  useEffect, useState } from 'react'
import { useCharacterContext } from '../context/Characters/CharacterContext'
import { useFavoriteContext } from '../context/Favorites/FavoriteContext'

import './Home.css'

    const PAGE_NUMBER = 1

const Home = () => {

    const [page, setPage] = useState(PAGE_NUMBER)

    const {characters, getCharacters } = useCharacterContext();
    const { favorites, getFavorites } = useFavoriteContext();
    
   

    useEffect(() => {
        getCharacters(page);
     }, [])
     useEffect(() => {
        window.onscroll = function (){
            if(window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight){
                    scrollToEnd()
                }
        }
     }, [])


     const scrollToEnd = () =>{
        setPage(page + 1)
        console.log("PAGE")
    }
   

    return(
        <div className='container'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png'
            alt="Star Wars Logo" width="100%"></img>
            <div className='row'>
            {characters.map(character => (
                <div className='col-md-6' key={character.name}>
                    <div className="card text-center">
                        <div className="card-body">
                        <div className="card-header">
                            <h3>{character.name}</h3>
                            <button className={`btn ${favorites.includes(character.name) ? 'btn-warning' : 'btn-outline-dark'}`}
                            onClick={() =>getFavorites(character.name)}
                            >
                                Favorito
                                </button>
                        </div>
                            <h5>Estatura: {character.height}</h5>
                            <h5>Peso: {character.mass}</h5>
                            <h5>Año de nacimiento{character.birth_year}</h5>
                        </div>
                    </div>
                </div>
                ))}   
            </div>
        </div>
    )
}
export default Home