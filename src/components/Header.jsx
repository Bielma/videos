import React from 'react';
import {connect} from 'react-redux';
import logo from '../assets/static/logo-platzi.png';
import userIcon from '../assets/static/user-icon.png';
import {Link} from 'react-router-dom';
import gravatar from '../utils/gravatar';

import '../assets/styles/components/Header.scss';

const Header = (props) => {

    const {user} = props;
    
    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="logo-platzi"/> 
            </Link>
            
            <div className="header__menu">
                <div className="header__menu--profile">
                    
                    <img src={Object.keys(user).length > 0 ? gravatar(user.email) : userIcon} 
                        alt="perfil-icon"/>
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


const mapStateToProps = state =>{
    return{
        user: state.user
    };
};


export default connect(mapStateToProps, null)(Header);
