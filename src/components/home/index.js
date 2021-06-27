import React,{ useContext, useRef, useState } from "react";
import SearchContext from "../../context/search/searchContext";
import { Redirect } from "react-router";
const Home = ()=>{
    const [redireccionar,setRedirecionar] = useState(false)
    const input_search = useRef(null);
    const {getSearch,search} = useContext(SearchContext);
    console.log(search)
    const prueba = () =>{
        getSearch(input_search.current.value)
    }
    const keyup = (e)=>{
        if(e.keyCode ===13){
            setRedirecionar(true);
        }
    }
    useState(()=>{
        
    },[])
    return(
        <>
           <input 
            onFocus={()=>{
               input_search.current.value =""
           }} 
           onChange= {prueba}
           ref = {input_search} type="text" value={"" + search}
           onKeyUp = {keyup}
           /> 

           {redireccionar&&<Redirect to="/search"/>}
           <input type = "file" onChange = {(e) =>{
               console.log(URL.createObjectURL(e.target.files[0]))
           }}/>
        </>
    )
}
export default Home;