import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem'
import Carousel from '../components/Carousel'
import useInitialState from '../hooks/useInitiialState';

import Footer from '../components/Footer'

const Home = () => {

    const url = 'http://localhost:3000/initalState';
    const videos = useInitialState(url);



    

    return (
        <div className="App">
            <Header/>
            <Search/>
            {
                videos.mylist.length > 0 &&
                <Categories title = "Mi lista">                
                    <Carousel>
                        <CarouselItem/>                                
                    </Carousel>
                </Categories>
            }

            <Categories title = "Tendencias">                
                    <Carousel   >
                    {
                        videos.trends.map(item =>
                            <CarouselItem key={item.id}{...item}/>  
                        )
                    }                
                    </Carousel>
            </Categories>
            <Categories title = "Originales">                
                    <Carousel   >
                    {
                        videos.originals.map(item =>
                            <CarouselItem key={item.id}{...item}/>  
                        )
                    }                
                    </Carousel>
            </Categories>
            
            <Footer/>
       </div>
    )
}


export default Home;
