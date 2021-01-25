import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = (props) => {

    const hasPlaying = Object.keys(props.playing).length > 0;    
    const {id} = props.match.params;
    const [loading, setLoading] = useState(true);
    console.log(props.playing);

    useEffect(() => {        
        props.getVideoSource(id);
        setLoading(false);        
    }, [])


    if (loading){
        return <h2>Cargando...</h2>;
    }else{
    
    return hasPlaying? (
        <div className= "player">
            <video controls={true} autoPlay>
                <source src = {props.playing.source} type = "video/mp4"/>
            </video>
            <div className = "Player-back">
                <button type = "button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>

            </div>
        </div>
        ):( <Redirect to="/" />)
    }
}


const mapStateToProps = state  =>{
    return{
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);
