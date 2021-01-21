import React from 'react'
import logo from '../assets/static/logo-platzi.png';
import userIcon from '../assets/static/user-icon.png';


import '../assets/styles/components/Header.scss';

const Header = () => {
    return (
        <header className="header">
            <img className="header__img" src={logo} alt="logo-platzi"/>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt="perfil-icon"/>
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="#">Cuenta</a></li>
                    <li><a href="./login.html">Cerrar sesion</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
