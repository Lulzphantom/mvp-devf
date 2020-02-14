import React, {useState, useEffect, useContext} from 'react';
import FadeIn from 'react-fade-in';
import  { LinkForm } from '../../components/forms/LinkForm';
import { useParams } from 'react-router-dom';

import LinkApi from '../../modules/linksApi';
import { AuthContext } from '../../Auth';

export const LinkFormContainer = (props) =>{

    const {type, action, id} = useParams();

    const [link, setLink] = useState([]);

    const { currentUser } = useContext(AuthContext);

    //Get link data
    useEffect(() => {
        if (action === 'edit') {
            new LinkApi().getLinkById(id,currentUser.uid)
                .then((result) => {
                    setLink(result.data);
                }).catch((err) => {
                    
                });
        }        
    }, []);


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
                                    description={link.description}
                                    url={link.url}
                                    icon={link.icon}
                                    iconColor={action == 'edit' ? link.iconColor : 'primary'}
                                    type={type}
                                    action={action}
                                    uid={currentUser.uid}
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