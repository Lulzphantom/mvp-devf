import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import logo from '../../assets/cloudLogo.png';
import { AuthContext } from '../../Auth';
import app from '../../firebase';

export const Nav = () => {

    //get user of context
    const { currentUser } = useContext(AuthContext);

    const LogOut = () => {
        app.auth().signOut();
        window.location.assign('/');
    }

    return (
        <div>            
            <nav className="navbar is-fixed-top is-link">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item nav-logo" >
                        <img src={logo} />
                        NubUx
                    </Link>                 
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            {
                                currentUser ?
                                <div>
                                    <span class="tag is-info is-rounded is-large">{currentUser.email}</span>                                    
                                    <button onClick={LogOut.bind(this)} class="button is-danger is-rounded">Cerrar sesión</button>
                                </div>
                                :
                                <div>
                                    <Link to="/auth/createAccount" className="button is-dark is-rounded">
                                    <strong>Crear cuenta</strong>
                                    </Link>
                                    <Link to="/auth/login" className="button is-light is-rounded">
                                        Iniciar sesión
                                    </Link>
                                </div>                                
                            }                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
