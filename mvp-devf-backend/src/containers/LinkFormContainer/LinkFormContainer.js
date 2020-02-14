import React from 'react';
import  { LinkForm } from '../../components/forms/LinkForm';



export const LinkFormContainer = () =>{

    return (
        <section className="hero is-light is-fullheight-with-navbar">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-8-tablet is-8-desktop">
                        <div className="box">
                                  <LinkForm />                    
                        </div>                
                    </div>
                </div>
            </div>
        </div>
    </section>  

    )
}