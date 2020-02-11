import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss';
import logo from '../../assets/cloudLogo.png';

export const Nav = () => {
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
                            <Link to="/auth/createAccount" className="button is-dark is-rounded">
                                <strong>Crear cuenta</strong>
                            </Link>
                            <Link to="/auth/login" className="button is-light is-rounded">
                                Iniciar sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
