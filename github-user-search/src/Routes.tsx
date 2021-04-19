import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './core/assets/components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';


const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
        </Switch>
    </BrowserRouter>

);

export default Routes;