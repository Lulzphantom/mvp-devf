import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

import './cards.scss';

export const FixedCard = (props) => {

    return (
        <div className="column is-one-quarter-desktop is-two-thirds-tablet is-three-quarters-mobile">
            <FadeIn transitionDuration={700}>               
                <Link to={`/links/${props.title}`} className="box cardBox fixedCard has-text-centered">
                    <span className="icon iconCard is-large has-text-info">
                        <i className={`${props.icon}`}></i>
                    </span>
                    <h1 className="title is-4 center">{props.title}</h1>                
                    <h2 className="subtitle has-text-info">{props.description}</h2>
                </Link>
            </FadeIn>    
        </div>
    )
}
