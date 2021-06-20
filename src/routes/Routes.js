import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SimpleBottomNavigation from '../components/layout/MainNav';
import Trending from '../components/pages/Trending/Trending';
import Movies from '../components/pages/Movies';
import Series from '../components/pages/Series';
import Search from '../components/pages/Search';



function Routes() {
  return (
    <BrowserRouter>
      <SimpleBottomNavigation />
      <div className="app">
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact/>
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
    
    
  );
}

export default Routes;
