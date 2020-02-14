import React, {useState} from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import {Redirect } from 'react-router';

import './linkForm.scss';
import LinkApi from '../../modules/linksApi';

export const LinkForm = (props) => {

    //Get props
    const {id, title, description, icon, iconColor, url, type, action} = props;    

    //Define inputs state and set defaults
    const [inputValue, setValue] = useState({title, description, icon, iconColor, url, type});
    
    //Update inputValue on change
    const handleChange = (event) => {
        setValue({...inputValue,[event.target.id] :  event.target.value})
    }

    const [redirect, setRedirect] = useState(false);

    //Save/Create link and go back
    const saveLink = (event) => {
        event.preventDefault();

        let api = new LinkApi();

        if (action === 'edit') {
            //Edit current link  
            console.log(inputValue);
            api.updateLinkById(id,props.uid,inputValue)
                .then((result) => {
                    setRedirect(true);
                }).catch((err) => {
                    console.log(err);
                    Swal.fire('Error',err.message,'error');
                });
            
        }else{
            //Create new link
            api.createLink(inputValue,props.uid)
                .then((result) => {
                    setRedirect(true);
                }).catch((err) => {
                    Swal.fire('Error',err.message,'error');
                });
        }
    }


    return (        
        <div>
            {
                !redirect ?
                <form>
                    <div className="field">
                        <label className="label">Título</label>
                        <div className="control has-icons-left">
                        <input value={inputValue.title} onChange={handleChange.bind(this)} id="title" type="text" placeholder="Título" className="input is-rounded" required />
                        <span className="icon is-small is-left">
                            <i className="fas fa-heading"></i>
                        </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Descripción</label>
                        <div className="control has-icons-left">
                        <input value={inputValue.description} onChange={handleChange.bind(this)} id="description" type="text" placeholder="Descripción" className="input is-rounded" required />
                        <span className="icon is-small is-left">
                            <i className="fas fa-audio-description"></i>
                        </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">URL</label>
                        <div className="control has-icons-left">
                        <input value={inputValue.url} onChange={handleChange.bind(this)} id="url" type="text" placeholder="URL" className="input is-rounded" required />
                        <span className="icon is-small is-left">
                            <i className="fas fa-cloud"></i>
                        </span>
                        </div>
                    </div>    
                    <label className="label">Icon</label>
                    <div className="field has-addons">                        
                        <div className="control">
                            <input value={inputValue.icon} onChange={handleChange.bind(this)} id="icon" type="text" placeholder="Fontawesome icon" className="input is-rounded" required />
                        </div>
                        <div className="control">
                            <a className="button is-info" href="https://fontawesome.com/icons?d=gallery&m=free" target="_blank">
                                buscar en Font Awesome
                            </a>
                        </div>
                    </div>     
                    <div className="field">
                        <label className="label">Color</label>
                            <div class="control">
                                <label class="radio">
                                    <input type="radio" value={'primary'} id="iconColor" onChange={handleChange.bind(this)} name="color" checked={inputValue.iconColor === 'primary'}/>
                                    <span className="bd-color has-background-primary"></span>
                                </label>
                                <label class="radio">
                                    <input type="radio" value={'info'} id="iconColor" onChange={handleChange.bind(this)} name="color" checked={inputValue.iconColor === 'info'}/>
                                    <span className="bd-color has-background-info"></span>
                                </label>
                                <label class="radio">
                                    <input type="radio" value={'link'} id="iconColor" onChange={handleChange.bind(this)} name="color" checked={inputValue.iconColor === 'link'}/>
                                    <span className="bd-color has-background-link"></span>
                                </label>
                                <label class="radio">
                                    <input type="radio" value={'success'} id="iconColor" onChange={handleChange.bind(this)} name="color" checked={inputValue.iconColor === 'success'}/>
                                    <span className="bd-color has-background-success"></span>
                                </label>
                                <label class="radio">
                                    <input type="radio" value={'warning'} id="iconColor" onChange={handleChange.bind(this)} name="color" checked={inputValue.iconColor === 'warning'}/>
                                    <span className="bd-color has-background-warning"></span>
                                </label>
                                <label class="radio">
                                    <input type="radio" value={'danger'} id="iconColor" onChange={handleChange.bind(this)} name="color" checked={inputValue.iconColor === 'danger'}/>
                                    <span className="bd-color has-background-danger"></span>
                                </label>
                                <label class="radio">
                                    <input type="radio" value={'dark'} id="iconColor" onChange={handleChange.bind(this)} name="color" checked={inputValue.iconColor === 'dark'}/>
                                    <span className="bd-color has-background-dark"></span>
                                </label>
                            </div>
                    </div>

                    <div className="field is-grouped flex">
                        <div className="control">
                        <button onClick={saveLink.bind(this)} className="button is-info is-rounded">{action === 'edit' ? 'Guardar' : 'Agregar'}</button>
                        </div>
                        <div className="control">
                        <Link to={`/links/${type}`} className="button is-link is-light is-rounded">Cancelar</Link>
                        </div>
                    </div>

                </form>
                :

                <Redirect push to={`/links/${type}`} />

            }
        </div>
        
    );
}