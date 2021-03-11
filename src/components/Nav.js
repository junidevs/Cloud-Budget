import React,{useEffect} from 'react'
import Orders from '../components/Orders';
import cloudIcon from '../styles/icons/Vector.png'
import * as $ from 'jquery';
import ScrollReveal from 'scrollreveal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Nav =(props) => {

  useEffect(()=>{
    window.__forceSmoothScrollPolyfill__ = true;
   
      ScrollReveal().reveal('.cloud_Icon', {
        scale:4,
        distance: '5px',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        duration: 1500,
        delay: 1700,
        useDelay: 'once',
        opacity: 0,
        rotate: {
          x: 30,
          y: 20,
          z: 10
         },    
  });
    });
   
  

  const elements =['#feature_Cont','.contact_Contaier','#tech_Container'];

    const featureScroll = () => {
      $([document.documentElement, document.body]).animate({
        scrollTop: $(elements[0]).offset().top
    }, 1300);
    }

    const contactScroll=()=>{
      $([document.documentElement, document.body]).animate({
        scrollTop: $(elements[1]).offset().top
    }, 1300);
    }
    const techScroll=()=>{
      $([document.documentElement, document.body]).animate({
        scrollTop: $(elements[2]).offset().top
    }, 1600);
    }

    
    return (
      <Router>
        <>
          <div className="navigation_Container">
              <div className="logo_square">
                  <img className="cloud_Icon" src={cloudIcon} alt="cloudIcon" />
                  <h2 className="logo_title">cloudbudgets</h2>
              </div>
              <div className="navigation_list">
                  <ul  className="ul_List">
                      <li className="item_list"><a className="navLinks" href="/#" >OVERWIEV</a></li>
                      <li className="item_list">
                      <a className="navLinks" href="/#" onClick={featureScroll}>FEATURES</a>
                    </li>

                      <li className="item_list"><a className="navLinks" href="/#" onClick={techScroll} >TECHNOLOGY</a></li>
                      <li className="item_list"><a className="navLinks" href="/#" onClick={contactScroll}>CONTACT</a></li>
                      <li className="item_list"><Link className="navLinks" to="/orders">SIGN UP</Link></li>
                  </ul>
                  </div>
                         <input type="checkbox" id="overlay-input" />
                         <label htmlFor="overlay-input" id="overlay-button"><span></span></label>

            <div id="overlay">
                <ul>
                      <li className="item_list"><a className="navLinks" href="/#" >OVERWIEV</a></li>
                      <li className="item_list"><a className="navLinks" href="/#" onClick={featureScroll}>FEATURES</a></li>
                      <li className="item_list"><a className="navLinks" href="/#" onClick={techScroll} >TECHNOLOGY</a></li>
                      <li className="item_list"><a className="navLinks" href="/#" onClick={contactScroll}>CONTACT</a></li>
                      <li className="item_list"><Link className="navLinks" to="/orders">SIGN UP</Link></li>
               </ul>
             </div>
          </div>
        </>
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          </Switch>
        </Router>
    )
}
export default Nav;



  //const burgerRef = useRef();
  //const ulRef = useRef();
  // const [open,setOpen] = useState(false);

 // useEffect(()=>{
 //     const loadMenu = (e)=>{
 //      
 //      if(burgerRef.current && burgerRef.current.contains(e.target)){
 //          ulRef.current.style.display="block";
 //          ulRef.current.classList.add('ul_mobile');
 //          setOpen(!open);
 //          console.log(open);
 //      }
 //      else if(open && burgerRef.current && burgerRef.current.contains(e.target)){
 //     
 //          ulRef.current.style.display="none";
 //          ulRef.current.style.opacity="0";
 //          console.log(open);
 //      }
 //     }
 //     document.body.addEventListener('click',loadMenu);
 // },[open]); 