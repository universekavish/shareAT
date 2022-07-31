import React from 'react';
import { Container, Grow, Grid} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => (
    <BrowserRouter>
        <Container maxWidth="lg">
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth}/>
            </Switch>
            <Home />
        </Container>
    </BrowserRouter>
);

export default App;