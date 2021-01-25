import React from 'react';
import {connect} from 'react-redux';
import logo from '../assets/static/logo-platzi.png';
import userIcon from '../assets/static/user-icon.png';
import {Link} from 'react-router-dom';
import gravatar from '../utils/gravatar';
import PropTypes from 'prop-types';

import '../assets/styles/components/Header.scss';
import { logoutRequest } from '../actions';

const Header = (props) => {

    const {user} = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () =>
    {   
        
        props.logoutRequest({});
        //props.history.push('/login');
        

    }
    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="logo-platzi"/> 
            </Link>
                        
            {
                hasUser &&
                <div className="header__menu">
                    
                    <div className="header__menu--profile">
                
                        <img src={ hasUser ? gravatar(user.email) : userIcon}   
                            alt="perfil-icon"/>
                        <p>Perfil</p>
                    </div>
                <ul>      
                <li><a >Perfil</a></li>                                                        
                <li>
                <Link to="/login" onClick= {handleLogout}>
                    Cerrar Sesión
                </Link>
                    
                </li>                                                                                                    
                </ul>
                </div>  
            }    
                  
        </header>
    )
}
Header.propTypes = {
    user: PropTypes.object,
    logoutRequest: PropTypes.func.isRequired,
  };
  

const mapStateToProps = state =>{
    return{
        user: state.user
    };
};

const mapDispathToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
