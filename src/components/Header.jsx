import React from 'react'
import logo from '../assets/static/logo-platzi.png';
import userIcon from '../assets/static/user-icon.png';
import {Link} from 'react-router-dom';

import '../assets/styles/components/Header.scss';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="logo-platzi"/> 
            </Link>
            
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt="perfil-icon"/>
                    <p>Perfil</p>
                </div>
                <ul>
                    <Link to = "/register">
                        <li><a >Cuenta</a></li>
                    </Link>
                    <Link to= "/login">
                        <li><a>Cerrar sesion</a></li>
                    </Link>
                    
                </ul>
            </div>
        </header>
    )
}

export default Header;
