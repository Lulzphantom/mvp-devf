import React, {useState, useCallback, useContext} from 'react';
import { Redirect} from 'react-router';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import './authForm.scss';  
import { AuthContext } from '../../Auth';
import app from '../../firebase';

export const AuthForm = (props, { history }) => {

    const {typeForm} = props;

    const [loading, setLoading] = useState('');

    const caption = typeForm === 'login' ? 'Iniciar sesión': 'Crear cuenta';        
    
    const [userValues = {
        displayName: '',
        email: '',
        password: '',
        confirmPw: ''
    }, setUserValues] = useState([]);

    //Update inputValue on change
    const handleChange = (event) => {
        setUserValues({...userValues,[event.target.id] :  event.target.value})
        console.log(userValues);
    }

    
    const authAction = (event) => {  
        event.preventDefault();
        setLoading('is-loading');

        if (typeForm === 'login') {
            //TODO Firebase login function
            app.auth().signInWithEmailAndPassword(userValues.email,userValues.password)
                .then((result) => {
                    return <Redirect to="/dashboard" />;
                }).catch((err) => {
                    Swal.fire('Error', err, 'error');
                });
            
        }else{
            //Check login data
            if (userValues.length < 4 || userValues.password !== userValues.confirmPw) {
                Swal.fire('Valores incorrectos', 'Campos vacios o las contraseñas no concuerdan', 'warning');
            }else{
                 //Firebase register function
                app.auth().createUserWithEmailAndPassword(userValues.email, userValues.password)
                    .then((result) => { 
                        app.auth().currentUser.updateProfile({displayName: userValues.displayName});                        
                        return <Redirect to="/dashboard" />;                      
                    }).catch((err) => {
                        Swal.fire('Error', err, 'error');
                    });
            }           
        }

        setLoading('');
    } 

    const testAuth = (event) => {
        event.preventDefault();
        app.auth().signInWithEmailAndPassword('test@test.com','test1234')
            .then((result) => {
                return <Redirect to="/dashboard" />;
            }).catch((err) => {
                Swal.fire('Error', err, 'error');
            });
    }
    
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/dashboard" />;
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
                        <label className="label">Nombre</label>
                            <div className="control has-icons-left">
                                <input type="text" id='displayName' onChange={handleChange.bind(this)} placeholder="Bom Smith" className="input is-rounded" required/>
                                <span className="icon is-small is-left">
                                    <i className="fa fa-user-ninja"></i>
                                </span>
                            </div>
                        </div> : ''
                }

                <div className="field">
                    <label className="label">Correo electronico</label>
                    <div className="control has-icons-left">
                        <input type="email" id='email' onChange={handleChange.bind(this)} placeholder="bobsmith@gmail.com" className="input is-rounded" required/>
                        <span className="icon is-small is-left">
                            <i className="fa fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Constraseña</label>
                    <div className="control has-icons-left">
                        <input type="password" id='password' onChange={handleChange.bind(this)} placeholder="*******" className="input is-rounded" required/>
                        <span className="icon is-small is-left">
                            <i className="fa fa-lock"></i>
                        </span>
                    </div>
                </div>

                {// Register password check
                    typeForm !== 'login' ? 
                    <div className="field">
                        <label className="label">Confirmar contraseña</label>
                        <div className="control has-icons-left">
                            <input type="password" id='confirmPw' onChange={handleChange.bind(this)} placeholder="*******" className="input is-rounded" required/>
                            <span className="icon is-small is-left">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                    </div> : ''
                }

                <div className="field">
                    <button onClick={authAction.bind(this)} className={`button is-info is-rounded is-fullwidth inputMargin ${loading}`}>{caption}</button>
                    <button onClick={testAuth.bind(this)} className={`button is-primary is-rounded is-fullwidth inputMargin`}>¡Probar!</button>
                </div>
            </form>            
        </div>
    )
}