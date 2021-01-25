import React,{useState} from  'react'
import '../assets/styles/components/Search.scss';
import classNames from 'classnames';
import useForm from '../hooks/useForm';
import { connect } from 'react-redux';
import {searchRequest} from '../actions'


const Search = ({isHome, searchRequest}) => {
    
    const [formValues, handleInputChange] = useForm({        
    });
    
    
    const handleSubmit = event =>{
        event.preventDefault();
        searchRequest(formValues.name);
        
    }
    const inputStyle = classNames('main__input', {
        isHome,
    });
    return (
        <form className="main" onSubmit ={handleSubmit}>            
                <h2 className="main__title">¿Que quieres ver hoy?</h2>
                <input 
                    name = "name"
                    className={inputStyle} 
                    type="text" 
                    placeholder="Buscar..."
                    onChange= {handleInputChange} />      
        </form>
    )
}

const mapDispathToProps = {
    searchRequest,
};

export default connect(null, mapDispathToProps)(Search)
