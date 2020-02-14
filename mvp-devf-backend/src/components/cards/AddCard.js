import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

import './cards.scss';

export const AddCard = (props) => {
    return (
        <div className="column is-one-quarter-desktop is-two-thirds-tablet is-three-quarters-mobile">
        <FadeIn transitionDuration={700}>   
            <div className="columns cardContainer">                                            
                <Link to={`/links/${props.type}/action/create/new`} className="box cardBox fixedCard addCard has-text-centered">
                    <span className={`icon iconCard is-large has-text-success`}>
                        <i className="fas fa-plus-circle"></i>
                    </span>
                    <h1 className="title is-4 center has-text-success">Agregar nuevo enlace</h1>
                </Link>
            </div>
        </FadeIn>    
    </div>
    )
}
