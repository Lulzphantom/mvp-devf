//React imports
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Local imports
import './App.scss';
import { Nav } from './components/nav/Nav';
import { BoardContainer } from './containers/BoardContainer/BoardContainer';
import { AuthContainer } from './containers/AuthContainer/AuthContainer';
import {LinkFormContainer} from './containers/LinkFormContainer/LinkFormContainer';
import { NotFoundContainer } from './containers/NotFoundContainer/NotFoundContainer';
import { LinksCardContainer } from './containers/LinksCardContainer/LinksCardContainer';


function App() {
    return (
        <div>
            <BrowserRouter>
            
                <Nav user={''} /> 
                <Switch>
                    <Route exact path="/"/>
                    <Route exact path="/auth/:auth" component={AuthContainer}/>                
                    <Route exact path="/dashboard" component={BoardContainer}/>
                    <Route exact path="/links/:type" render={(props) => <LinksCardContainer {...props} user={{id: 1}} />} />
                    <Route exact path="/links/:type/action/:action/:id" render={(props) => <LinkFormContainer {...props} user={{id: 1}} />} />                     
                    <Route exact path="/notFound/:endPoint" component={NotFoundContainer}/>                
                </Switch>
                
            </BrowserRouter> 
        </div>
    );
}

export default App;
