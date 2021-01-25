import React,{useState} from 'react'
import '../assets/styles/components/Login.scss';
import '../assets/styles/App.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import Header from '../components/Header';

const Login = (props) => {
    const [form, setForm] = useState({});

    const handleInput = event =>{
        setForm({
            ...form,
            [event.target.name]:event.target.value,            
        })
    }
    const handleSubmit = event =>{        
        event.preventDefault();
        props.loginRequest(form)
        props.history.push('/');
        alert('Welcome back '+ form.email);
    }
    return(  
       <>
       <Header isLogin/>
        <section className="login"> 
        <section className="login__container">
            <h2>Inicia sesion</h2>
            <form className="login__form" onSubmit = {handleSubmit}>
                <input name = "email" className="input" type="text" placeholder="Correo" onChange = {handleInput}/>
                <input name = "password" className="input" type="text" placeholder="Contraseña"onChange = {handleInput}/>
                <button className="button">Iniciar Sesion</button>
                <div className="login__container--rememberMe">
                    <label>
                        <input type="checkbox" name="" id="cbx1" value="checkbox"/>recuerdame
                    </label>
                    <a href="">Olvidé mi contraseña</a>
                </div>
            </form>

            <section className="login__container--socialMedia">
                <div>
                    <img src="https://icon-library.com/images/google-g-icon/google-g-icon-9.jpg" alt="google"/> Inicia sesion con google
                </div>
                <div>
                    <img src="https://secureservercdn.net/192.169.221.188/7d7.5b1.myftpupload.com/wp-content/uploads/2014/10/Twitter_logo_white.png?time=1597441252" alt="twitter"/> Inicia sesion con Twitter
                </div>
                <p className="login__container--register">¿No tienes ninguna cuenta? {' '}
                <Link to="/register">
                    Registrate    
                </Link>
                
                </p>
            </section>
        </section>
    </section>
    </>
    )};

const mapDispathToProps = {
    loginRequest,
}; 

export default connect(null, mapDispathToProps)(Login);
