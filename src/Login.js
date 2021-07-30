import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login"> 
            <img src="https://martechtoday.com/wp-content/uploads/cld-assets/spotify-logo-1920x1080_fouoik.jpg" alt="spotify img"></img>

            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
