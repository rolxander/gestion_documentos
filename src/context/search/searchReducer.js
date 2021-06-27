import {GET_SEARCH} from '../types'

 const SearchReducer = (state, action) => {
    const {payload,type} = action;
    switch(type){
        case GET_SEARCH:{
            return{
                ...state,
                search:payload
            }
        }
        default:
            return state;
    }

}
export default SearchReducer;