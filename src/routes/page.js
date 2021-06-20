import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../components/pages/HomePage';
import OverviewPage from '../components/pages/OverviewPage';

const Page = () => {
    return (
        <div>   
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/aboutMovie' component={OverviewPage} />
                </Switch>
            </Router>        
          </div>
    );
};

export default Page;