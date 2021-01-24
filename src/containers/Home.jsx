import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem'
import Carousel from '../components/Carousel'


const Home = ({myList, trends, originals}) => {
    console.log(myList);
    return (
        <>            
            <Search/>
            {
                myList.length > 0 &&
                <Categories title = "Mi lista">                
                    <Carousel>                        
                    {
                        myList.map(item =>
                            <CarouselItem key={item.id}{...item}/>  
                        )
                    }                    
                    </Carousel>
                </Categories>
            }

            <Categories title = "Tendencias">                
                    <Carousel   >
                    {
                        trends.map(item =>
                            <CarouselItem key={item.id}{...item}/>  
                        )
                    }                
                    </Carousel>
            </Categories>
            <Categories title = "Originales">                
                    <Carousel   >
                    {
                        originals.map(item =>
                            <CarouselItem key={item.id}{...item}/>  
                        )
                    }                
                    </Carousel>
            </Categories>                        
       </>
    )
}


const mapStateToProps = state =>{
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };

};

//Conector
export default connect(mapStateToProps, null)(Home);