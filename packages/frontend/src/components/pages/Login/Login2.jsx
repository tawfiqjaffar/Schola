import React from 'react';
import './LoginPage.css';

const Login = () => {
    return (
        <div className="container">
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="center">
                <p className="bold">Bienvenue sur SCHOLA</p>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
            </div>
        </div>
    );
};

export default Login;
