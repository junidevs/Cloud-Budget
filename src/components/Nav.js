import React,{useRef,useState,useEffect} from 'react'
import cloudIcon from '../styles/icons/Vector.png'
const Nav =() => {

   const burgerRef = useRef();
   const ulRef = useRef();
    const [open,setOpen] = useState(false);

   useEffect(()=>{
       const loadMenu = (e)=>{
        
        if(burgerRef.current && burgerRef.current.contains(e.target)){
            ulRef.current.style.display="block";
            ulRef.current.classList.add('ul_mobile');
            setOpen(!open);
            console.log(open);
        }
        else if(open && burgerRef.current && burgerRef.current.contains(e.target)){
       
            ulRef.current.style.display="none";
            ulRef.current.style.opacity="0";
            console.log(open);
        }
       }
       document.body.addEventListener('click',loadMenu);
   },[open]); 
    return (
        <>
          <div className="navigation_Container">
              <div className="logo_square">
                  <img className="cloud_Icon" src={cloudIcon} alt="cloudIcon" />
                  <h2 className="logo_title">cloudbudgets</h2>
              </div>
              <div className="navigation_list">
                  <ul ref={ulRef} className="ul_List">
                      <li className="item_list"><a className="navLinks" href="#" >OVERWIEV</a></li>
                      <li className="item_list"><a className="navLinks" href="#" >FEATURES</a></li>
                      <li className="item_list"><a className="navLinks" href="#" >TECHNOLOGY</a></li>
                      <li className="item_list"><a className="navLinks" href="#" >CONTACT</a></li>
                      <li className="item_list"><a className="navLinks" href="#" >SIGN UP</a></li>
                  </ul>
                  </div>
                         <input type="checkbox" id="overlay-input" />
                         <label htmlFor="overlay-input" id="overlay-button"><span></span></label>

            <div id="overlay">
                <ul>
                      <li className="item_list"><a className="navLinks" href="#" >OVERWIEV</a></li>
                      <li className="item_list"><a className="navLinks" href="#" >FEATURES</a></li>
                      <li className="item_list"><a className="navLinks" href="#" >TECHNOLOGY</a></li>
                      <li className="item_list"><a className="navLinks" href="#" >CONTACT</a></li>
                      <li className="item_list"><a className="navLinks" href="#" >SIGN UP</a></li>
               </ul>
             </div>
          </div>
        </>
    )
}
export default Nav;
