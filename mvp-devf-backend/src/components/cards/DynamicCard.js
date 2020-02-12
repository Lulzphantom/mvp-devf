import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

export const DynamicCard = (props) => {

    const deleteLink = (linkId) => {
        console.log("Eliminando!")
    }

    return (
        <div className="column is-one-quarter-desktop is-two-thirds-tablet is-three-quarters-mobile">
        <FadeIn transitionDuration={1000}>   
            <div className="columns cardContainer">                                            
                <a href={props.link} className="box cardBox fixedCard has-text-centered">
                    <span className={`icon iconCard is-large has-text-${props.color}`}>
                        <i className={`${props.icon}`}></i>
                    </span>
                    <h1 className="title is-4 center">{props.title}</h1>                
                    <h2 className={`subtitle has-text-${props.color}`}>{props.description}</h2>
                </a>
                <div className="cardFunctions">
                    <Link className="icon cardFunction has-text-info"><i className="fas fa-edit"></i></Link>
                    <div onClick={deleteLink.bind(this,props.id)} className="icon cardFunction has-text-danger"><i className="fas fa-trash"></i></div>  
                </div>  
            </div>
        </FadeIn>    
    </div>
    )
}
