//React imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Local imports
import './App.scss';
import { Nav } from './components/nav/Nav';
import { BoardContainer } from './containers/BoardContainer/BoardContainer';
import { AuthContainer } from './containers/AuthContainer/AuthContainer';
import {LinkFormContainer} from './containers/LinkFormContainer/LinkFormContainer';
import { NotFoundContainer } from './containers/NotFoundContainer/NotFoundContainer';
import { LinksCardContainer } from './containers/LinksCardContainer/LinksCardContainer';
import { AuthProvider } from './Auth';
import PrivateRoute from './routes/PrivateRoute';

function App() {
    return (
        <div>
        <AuthProvider>
            <Router>            
                <Nav user={''} />
                <PrivateRoute exact path="/" component={AuthContainer}/>
                <Route exact path="/auth/:auth" component={AuthContainer}/>                
                <Route exact path="/dashboard" component={BoardContainer}/>
                <Route exact path="/links/:type" component={LinksCardContainer}/>
                <Route exact path="/links/:type/action/:action/:id" component={LinkFormContainer}/>                     
                <Route exact path="/notFound/:endPoint" component={NotFoundContainer}/> 
            </Router> 
        </AuthProvider>            
        </div>
    );
}

export default App;
