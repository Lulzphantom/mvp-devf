import React from 'react';
import FadeIn from 'react-fade-in';
import './cards.scss';

export const FixedCard = (props) => {
    return (
        <div className="column is-one-quarter-desktop is-two-thirds-tablet is-three-quarters-mobile">
            <FadeIn transitionDuration={1000}>               
                <div className="box cardBox fixedCard has-text-centered">
                    <span class="icon iconCard is-large has-text-info">
                        <i class={`${props.icon}`}></i>
                    </span>
                    <h1 class="title is-4 center">{props.title}</h1>                
                    <h2 class="subtitle has-text-info">{props.description}</h2>
                </div>
            </FadeIn>    
        </div>
    )
}
