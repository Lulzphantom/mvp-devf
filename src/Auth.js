import React, {useEffect, useState} from 'react';
import app from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {

    const [currentUser, setcurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setcurrentUser);
    }, []);
    
    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};

