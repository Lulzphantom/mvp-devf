import axios from 'axios';
const AuthApiUrl = '';

export default class AuthApi{
    // Create new user
    createUser = (displayName, email, password) => {
        return axios.post(`${AuthApiUrl}/createUser`, {displayName, email, password} );
    }

    // sign in user
    signInUser = (email, password) => {
        return axios.post(`${AuthApiUrl}/signInUser`, {email, password});
    }
}