import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { authForm } from '../../components/forms/authForm';

import './authContainer.scss';


export const AuthContainer = () => {  

    //Get params
    const {auth} = useParams();

    //Check params
    if (auth !== 'login' && auth !== 'createAccount') {
        window.location.assign(`/notFound/${auth}`);
        return;
    }

    return (
        <section className="hero is-light is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-8-tablet is-5-desktop">
                            <div className="box">
                                <FadeIn>
                                    {authForm(auth)}
                                </FadeIn>                                
                            </div>                
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    )
}
