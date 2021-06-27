import React, { useReducer } from 'react'
import SearchReducer from './searchReducer'
import SearchContext from './searchContext'
const SearchState = (props) =>{
    
    const initialState = {
        search:"",
        results=[]
    }

    const [state, dispatch] = useReducer(SearchReducer,initialState)
    const getSearch = (value_input) =>{ 
        dispatch({
            type:'GET_SEARCH',
            payload:value_input
        })
    }
    const getResults = async(text) =>{
        const res = await 
    }
    
    return(
        <SearchContext.Provider value={{
            search : state.search,
            getSearch
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}
export default SearchState;

