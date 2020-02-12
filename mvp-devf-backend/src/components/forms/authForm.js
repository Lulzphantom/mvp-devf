import React, {useState} from 'react';
import Swal from 'sweetalert2';
import './authForm.scss';

export const AuthForm = (typeForm) => {

    const [loading, setLoading] = useState(false);

    const caption = typeForm === 'login' ? 'Iniciar sesión': 'Crear cuenta';         
    
    const authAction = () => {
        if (typeForm === 'login') {
            //Login
            window.location.assign('/dashBoard');
        }else{
            //Register

        }
    }

    return (
        <div>
            <div className="headText columns is-centered">
                {caption}
            </div>
            <form>

                {// Register displayName
                    typeForm !== 'login' ?
                        <div className="field">
                        <label for="" className="label">Nombre</label>
                            <div className="control has-icons-left">
                                <input type="text" placeholder="Bom Smith" className="input is-rounded" required/>
                                <span className="icon is-small is-left">
                                    <i className="fa fa-user-ninja"></i>
                                </span>
                            </div>
                        </div> : ''
                }

                <div className="field">
                    <label for="" className="label">Correo electronico</label>
                    <div className="control has-icons-left">
                        <input type="email" placeholder="bobsmith@gmail.com" className="input is-rounded" required/>
                        <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label for="" className="label">Constraseña</label>
                    <div className="control has-icons-left">
                        <input type="password" placeholder="*******" className="input is-rounded" required/>
                        <span className="icon is-small is-left">
                            <i className="fa fa-lock"></i>
                        </span>
                    </div>
                </div>

                {// Register password check
                    typeForm !== 'login' ? 
                    <div className="field">
                        <label for="" className="label">Confirmar contraseña</label>
                        <div className="control has-icons-left">
                            <input type="password" placeholder="*******" className="input is-rounded" required/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                    </div> : ''
                }


                <div className="field">
                    <button onClick={() => setLoading('is-loading')} className={`button is-info is-rounded is-fullwidth inputMargin ${loading}`}>{caption}</button>
                    <button onClick={authAction.bind(this)} className={`button is-info is-rounded is-fullwidth inputMargin`}>{caption}</button>
                </div>
            </form>            
        </div>
    )
}
