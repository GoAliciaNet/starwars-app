import { useReducer } from "react"
import CharacterReducer from "./CharacterReducer"
import CharacterContext from "./CharacterContext"
import axios from "axios"
import PropTypes from 'prop-types';

const CharacterState = (props) => {
    const initialState={
        characters:[],
        selectedCharacter: null
    }

    const [state, dispatch] = useReducer(CharacterReducer, initialState)

    const getCharacters = async () =>{
        const res = await axios.get('https://swapi.dev/api/people/')
        console.log(res)
    }
    
    // const getProfile = () =>{}
    return (
        <CharacterContext.Provider value={{
            characters: state.characters,
            selectedCharacter: state.selectedCharacter,
            getCharacters,
            // getProfile
        }}>
            {props.children}
            
        </CharacterContext.Provider>
        
    )
    
}


export default CharacterState