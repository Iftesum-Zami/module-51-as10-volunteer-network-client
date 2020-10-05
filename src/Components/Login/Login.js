import React, { useContext } from 'react';
import logo from '../../images/logos/logo.png';
import googleIcon from '../../images/logos/google.png';
import './login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            const {displayName, email} = user;
            const signedInUser = {name: displayName, email: email};
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch(error => {
        });
    }

    return (
        <div className="App">
            <img style={{width: '150px', margin: '20px'}} src={logo} alt=""/>
            <div className="d-flex justify-content-center">
                <div className="borderStyle">
                    <h4 style={{margin: '30px'}}>Login with</h4>

                    <button className="googleBtn" onClick={handleGoogleSignIn}>
                        <img className='iconImg' src={googleIcon} alt=""/>
                        <span>Continue with Google</span>
                    </button>
                    
                    <br/>
                    <small>Don't have an account? <span style={{color: 'blue'}}><u>Create an account</u></span></small>
                </div>
            </div>
        </div>
    );
};

export default Login;