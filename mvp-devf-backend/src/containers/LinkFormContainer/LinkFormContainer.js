import React, {useState, useEffect} from 'react';
import FadeIn from 'react-fade-in';
import  { LinkForm } from '../../components/forms/LinkForm';
import { useParams } from 'react-router-dom';

import LinkApi from '../../modules/linksApi';

export const LinkFormContainer = (props) =>{

    const {type, action, id} = useParams();

    const [link, setLink] = useState([]);

    useEffect(() => {
        if (action === 'edit') {
            new LinkApi().getLinkById(id,props.user.id)
                .then((result) => {
                    setLink(result.data);
                }).catch((err) => {
                    
                });
        }        
    }, []);

    //Get link data


    return (
        <section className="authHero hero is-light is-fullheight-with-navbar">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-8-tablet is-8-desktop">
                        <div className="box">
                        {
                            link.length === 0 && action === 'edit' ?
                            <div>
                                <div className="column button is-loading is-rounded is-link"></div>
                            </div>
                            :
                            <FadeIn>
                                <LinkForm
                                    id={id}
                                    title={link.title}
                                    type={link.type}
                                    description={link.description}
                                    link={link.url}
                                    icon={link.icon}
                                    color={link.iconColor}
                                    type={type}
                                    action={action}
                                /> 
                            </FadeIn> 
                        }                                                                          
                        </div>                
                    </div>
                </div>
            </div>
        </div>
    </section>  

    )
}