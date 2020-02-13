import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import './cards.scss';

export const DynamicCard = (props) => {

    const deleteLink = (linkId, title) => {
        Swal.fire({
            title: `Desea eliminar '${title}'?`,
            text: "Se eliminara el enlace de forma permanente!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            confirmButtonText: 'Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // Result Alerts
                // new MovieApi().deleteMovie(linkId)
                //     .then((result) => {
                //         Swal.fire(
                //             'Eliminada!',
                //             'La pelicula fue eliminada.',
                //             'success'
                //         );
                //     }).catch((err) => {
                //         console.log(err);
                //         Swal.fire(
                //             'Error!',
                //             `${err}`,
                //             'error'
                //         );
                //     });
                
            }
        })
    }

    return (
        <div className="column is-one-quarter-desktop is-two-thirds-tablet is-three-quarters-mobile">
        <FadeIn transitionDuration={700}>   
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
                    <div onClick={deleteLink.bind(this,props.id, props.title)} className="icon cardFunction has-text-danger"><i className="fas fa-trash"></i></div>  
                </div>  
            </div>
        </FadeIn>    
    </div>
    )
}
