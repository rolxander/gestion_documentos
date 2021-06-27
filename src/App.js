import {BrowserRouter,Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListRoutes from './routes'
import SearchState from './context/search/searchState';
function App() {
  return (
    <SearchState>
      <BrowserRouter>
        <Switch>
          <ListRoutes/>
        </Switch>
      </BrowserRouter>  
    </SearchState>
    
  );
}

export default App;
