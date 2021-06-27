import React, { useContext,useEffect,useRef } from 'react'
import SearchContext from '../../context/search/searchContext'
const Search = ()=>{
    const {search} = useContext(SearchContext)    
    const input_search = useRef(null);
    useEffect(()=>{
        input_search.current.value =""+ search
        console.log(search)
    },[search])
    return(
    <>
        <h1>Lista de busquedas</h1>
        <input type="text" ref={input_search}/>
    </>)
}
export default Search;