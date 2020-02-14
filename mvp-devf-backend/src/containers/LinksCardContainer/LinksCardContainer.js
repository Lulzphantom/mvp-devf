import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import './linksCardContainer.scss';
import { DynamicCard } from '../../components/cards/DynamicCard';
import { AddCard } from '../../components/cards/AddCard';
import LinkApi from '../../modules/linksApi';

export const LinksCardContainer = (props) => {
    
    //get params
    const {type} = useParams();

    const [link, setLink] = useState([]);

    const [add, setAdd] = useState(false);

    useEffect(() => {
        let linkRequest = new LinkApi().getLinksByType(type, props.user.id)
        linkRequest
            .then((linkData) => {                
                setLink(linkData.data);    
                setAdd(true);            
            }).catch((err) => {
                console.log(`Error: ${err}`);    
                if (err.response.status === 404) {
                    setAdd(true);  
                }else{
                    setLink([{title: err.response.status, icon: 'fas fa-exclamation-circle', iconColor: 'danger', description: err.message}]);
                }
                
            });
    }, []);

    // Delete link item
    const onDelete = (id) => {
        new LinkApi().deleteLinkById(id, props.user.id)
            .then((result) => {
                const newLink = link.filter(x => x.id !== id);
                setLink(newLink);  
            }).catch((err) => {
                Swal.fire("Error",err,"error")
            });
            
    }    

    return (
        <section className="authHero hero is-light is-fullheight-with-navbar heroLinks">         
            <div className="hero-body">               
                <div className="container">
                    <div className="columns">                        
                        <div className="column">
                            <Link to="/dashboard" className="button is-link is-outlined is-rounded">
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
                        {
                            link.length === 0 && !add? 
                            <div className="button is-loading is-rounded is-link"></div>                         
                            :
                            null
                        }  
                        
                        {  // Cards
                            link !== null ? link.map(data => (                            
                            <DynamicCard 
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            type={data.type}
                            description={data.description}
                            link={data.url}
                            icon={data.icon}
                            color={data.iconColor}
                            onDelete={onDelete}
                            />
                        )) : null}

                        { // Add card, called when link state update
                            add === true ?
                                <AddCard 
                                type={type}                            
                            /> : null}                        
                    </div>                    
                </div>
            </div>
        </section> 
    )
}
