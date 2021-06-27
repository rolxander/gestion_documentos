import {Route} from 'react-router-dom'
import Home from '../components/home'
import Search from '../components/search'
const ListRoutes = ()=>{
    return(
    <>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/search" component={Search}/>
    </>)
}
export default ListRoutes;