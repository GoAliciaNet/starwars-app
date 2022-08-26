import {GET_FAVORITES} from '../types'

export default (state, action) => {
    const {payload, type} = action; 

    switch(type){
        case GET_FAVORITES:
            return{
                ...state,
                favorites: payload
            }
    }
}