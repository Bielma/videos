import React from 'react'
import {connect} from 'react-redux';
import '../assets/styles/components/CarouselItem.scss';
import PropTypes from 'prop-types';
import {setFavorite, deleteFavorite} from '../actions';

const CarouselItem = (props) => {

    const {id, cover, title, year, contenRating, duration, isList} = props;
    const handleSaveFavorite = () =>{
        props.setFavorite({
                id,cover, title,year, contenRating, duration
            })
    }
    const handleDeleteFavorite = () =>{
        props.deleteFavorite(id)
    }
    return (
        <div className="carousel-item">
                <img className="carousel-item__img" src={cover} alt="cover"/>
                <div className="carousel-item__details">
                    <div>
                    <img className= "carousel-item__detail--img" src=" https://raw.githubusercontent.com/teffcode/Platzi-Frontend-Dev/master/assets/play-icon.png" alt="play-icon"></img>
                        {
                            isList ?
                            <img 
                            className= "carousel-item__detail--img" 
                            src="https://static.platzi.com/media/public/uploads/remove-icon_a56b8107-2c02-49ed-bead-308031b0dd76.png" 
                            alt="logo+"
                            onClick={handleDeleteFavorite}></img> :
                            <img 
                            className= "carousel-item__detail--img" 
                            src=" https://raw.githubusercontent.com/teffcode/Platzi-Frontend-Dev/master/assets/plus-icon.png" 
                            alt="logo+"
                            onClick={handleSaveFavorite}></img>
                        }                                                            
                        
                        
                    </div>
                    <p className="carousel-item__details--title">{title}</p>
                    <p className="carousel-item__details--subtitle">
                    {year + ' ' +contenRating + ' ' + duration }
                    </p>
                </div>
        </div>
    )
}

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contenRating: PropTypes.string,
    duration: PropTypes.number ,
  };
  
const mapDispatchToProps =  {
    setFavorite,
    deleteFavorite,
}
 
export default connect(null, mapDispatchToProps)(CarouselItem);