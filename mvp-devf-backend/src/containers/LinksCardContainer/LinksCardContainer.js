import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { DynamicCard } from '../../components/cards/DynamicCard';

import './linksCardContainer.scss';
import { AddCard } from '../../components/cards/AddCard';

export const LinksCardContainer = () => {
    
    const cards = [];

    for (let i = 0; i < 6; i++) {
        cards.push(i);
        
    }

    const {type} = useParams();

    return (
        <section className="hero is-light is-fullheight-with-navbar">           
            <div className="hero-body">               
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <Link to="/dashBoard" className="button is-link is-outlined is-rounded">
                                <span className="icon is-small">
                                    <i className="fas fa-arrow-left"></i>
                                </span>
                                <span>Ir a pagina principal</span>                        
                            </Link>
                        </div>
                        <div className="column is-full">
                            <h1 className="title">
                                - {type}
                            </h1>
                        </div>                       
                        
                    </div>                                        
                    <div className="columns is-multiline contCards">
                        {cards.map(data => (
                            <DynamicCard 
                            color='info'
                            icon='fas fa-address-card'
                            title='Hola soy un titulo tarjeta dinamica'
                            description='probando descripcion tarjeta dinamica'
                            />
                        ))}
                        <AddCard />
                    </div>                    
                </div>
            </div>
        </section> 
    )
}
