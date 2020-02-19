import React, {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';
import logo from '../../assets/cloudLogo.png';
import { AuthContext } from '../../Auth';
import app from '../../firebase';

export const Nav = () => {

    const [dropState, setdropState] = useState(false);

    const onDropStateChange = () => {
        setdropState(!dropState);
    }

    //get user of context
    const { currentUser } = useContext(AuthContext);

    const LogOut = () => {
        app.auth().signOut();
        window.location.assign('/');
    }

    useEffect(() => {

    },[]);

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
                                <div className="nav-controls">

                                    <div className={`dropdown ${!dropState ? '' : 'is-active'}`}>
                                        <div className="dropdown-trigger ">
                                            <button onClick={onDropStateChange.bind(this)} className="button is-rounded has-text-white has-background-info" aria-haspopup="true" aria-controls="dropdown-menu">
                                                <span>{currentUser.email}</span>
                                                <span className="icon is-small has-text-white">
                                                    <i className={`${!dropState ? 'fas fa-angle-down' : 'fas fa-angle-up'}`} aria-hidden="true"></i>
                                                </span>
                                            </button>
                                        </div>
                                        <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                            <div className="dropdown-content">
                                                {/* <a href="#" className="dropdown-item">
                                                    Dropdown item
                                                </a> */}
                                                <hr className="dropdown-divider"/>
                                                <a onClick={LogOut.bind(this)} className="dropdown-item">
                                                    Cerrar sesión
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    {/* <div>
                                        <span class="tag is-info is-rounded is-large">{currentUser.email}</span>
                                    </div>
                                    <button onClick={LogOut.bind(this)} class="button is-danger is-rounded">Cerrar sesión</button> */}
                                </div>
                                :
                                <div className="nav-controls">
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
