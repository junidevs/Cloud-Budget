import React,{useEffect} from 'react'
import Navigation from '../components/Nav';
import MainContent from '../components/MainContent';
import Features from '../components/Features';
import Technology from '../components/Technology';
import Promote from '../components/Promote';
import Contact from '../components/Contact'
import mainBackground from '../styles/images/mainBackground.png';
import ScrollReveal from 'scrollreveal';

const MainPage=()=> {
    //there I tried to pass the continer ID from feature component down to nav component but I think this is not the best approach 
    //also jquery wasn't able to read data from props, even after destructuring
    useEffect(()=>{
        ScrollReveal().reveal('.main_Background_Container', {
            scale:3,
            distance: '5px',
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            duration: 2500,
            delay: 0,
            useDelay: 'once',
            opacity: 0,
            rotate: {
              x: 30,
              y: 90,
              z: 10
             },    
   });

   
    })
    return (
        <>
    
        <div className="main_Background_Container">
            <div className="overlay_Background"></div>
                <img className="overlay_Image" src={mainBackground} alt="mainBackground"/>
           <div className="main_Content">
          <Navigation FeaturesID={'features_Container'}/>
            <MainContent />
            <Features FeaturesID={'features_Container'}/>
            <Technology />
            <Promote />
            <Contact />
            </div>
        </div>
     
    
        </>
    )
}
export default MainPage;