//React imports
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Local imports
import './App.scss';
import { Nav } from './components/nav/Nav';
import { BoardContainer } from './containers/BoardContainer/BoardContainer';
import { AuthContainer } from './containers/AuthContainer/AuthContainer';
import { NotFoundContainer } from './containers/NotFoundContainer/NotFoundContainer';
import { LinksCardContainer } from './containers/LinksCardContainer/LinksCardContainer';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Nav user={''} /> 
                <Route path="/"/>
                <Route path="/auth/:auth" component={AuthContainer}/>                
                <Route path="/dashBoard" component={BoardContainer}/>
                <Route path="/links/:type" render={(props) => <LinksCardContainer {...props} user={{id: 1}} />} />                    
                <Route path="/notFound/:endPoint" component={NotFoundContainer}/>                
            </BrowserRouter> 
        </div>
    );
}

export default App;
