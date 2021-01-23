import React from 'react'
import '../assets/styles/components/CarouselItem.scss';
import PropTypes from 'prop-types';
const CarouselItem = ({cover, title, year, contenRating, duration}) => {
    return (
        <div className="carousel-item">
                <img className="carousel-item__img" src={cover} alt="cover"/>
                <div className="carousel-item__details">
                    <div>
                        <img className= "carousel-item__detail--img" src=" https://raw.githubusercontent.com/teffcode/Platzi-Frontend-Dev/master/assets/play-icon.png" alt="play-icon"></img>
                        <img className= "carousel-item__detail--img" src=" https://raw.githubusercontent.com/teffcode/Platzi-Frontend-Dev/master/assets/plus-icon.png" alt="logo+"></img>
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
  
export default CarouselItem;
