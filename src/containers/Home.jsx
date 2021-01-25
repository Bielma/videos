import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Search from '../components/Search';
import '../assets/styles/App.scss';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem'
import Carousel from '../components/Carousel'
import Header from '../components/Header';


const Home = (props) => {
    
    const {user, searchItems ,myList, trends, originals} = props;
    const hasUser = Object.keys(user).length > 0;    
    useEffect(() => { 
        if(!hasUser){
            //props.history.push('/login');
        }
    },[]);

    return (
        <>            
            <Header/>
            <Search isHome />

            {
                Object.keys(searchItems).length  > 0 &&
                <Categories title = "Resultados">                
                    <Carousel>                        
                    {
                        
                            <CarouselItem 
                                key={searchItems.id}
                                {...searchItems}                                
                            />  
                        
                    }                    
                    </Carousel>
                </Categories>
            }

            {
                myList.length > 0 &&
                <Categories title = "Mi lista">                
                    <Carousel>                        
                    {
                        myList.map(item =>
                            <CarouselItem 
                                key={item.id}
                                {...item}
                                isList
                            />  
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
        user: state.user,
        searchItems: state.searchItems,
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };

};

//Conector
export default connect(mapStateToProps, null)(Home);