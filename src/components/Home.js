import { useContext, useEffect } from 'react'
import CharacterContext from '../context/Characters/CharacterContext'

const Home = () => {

    const {getCharacters } = useContext(CharacterContext);

    useEffect(() => {
        getCharacters();
     }, [])

    return(
        <div>
            <h1> View Home</h1>
        </div>
    )
}
export default Home