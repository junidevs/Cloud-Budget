import React from 'react'
import Navigation from '../components/Nav';
import MainContent from '../components/MainContent';
import Features from '../components/Features';
import Technology from '../components/Technology';
import Promote from '../components/Promote';
import Contact from '../components/Contact'
import mainBackground from '../styles/images/mainBackground.png';
const MainPage=()=> {
    return (
        <>
        <div className="main_Background_Container">
            <div className="overlay_Background"></div>
                <img className="overlay_Image" src={mainBackground} alt="mainBackground"/>
           <div className="main_Content">
            <Navigation />
            <MainContent />
            <Features />
            <Technology />
            <Promote />
            <Contact />
            </div>
        </div>
            
        </>
    )
}
export default MainPage;