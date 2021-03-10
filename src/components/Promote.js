import React from 'react'
import aVector from '../styles/icons/aVector.png';
import googleVector from '../styles/icons/googleVector.png';
import winVector from '../styles/icons/winVector.png';
import mainImagePromote from '../styles/images/mainImagePromote.png';
import leftImagePromote from '../styles/images/leftImagePromote.png';
import rightImagePromote from '../styles/images/rightImagePromote.png';

const  Promote = () => {
    return (
        <>
            <div className="promote_Contaier">
                  <div className="promote_Left_Bar">
                    <h2 className="promote_H2">Stay focused on saving money</h2>
                    <h4 className="promote_H4">
                        It is important to stay focused on saving money in any way
                     you can. We help you monitor your spending habits so you can easily spot and 
                     cut any unnecessary expenses. Simply join today to get started!
                     </h4>
                     <div className="vectors_Promote_Square">
                        <img className="icon_Promote_Vectors" src={aVector} alt="iconAdvert" />
                        <img className="icon_Promote_Vectors" src={googleVector} alt="iconAdvert" />
                        <img className="icon_Promote_Vectors" src={winVector} alt="iconAdvert" />
                     </div>
                </div>


                <div className="promote_Right_Bar">
                    <div className="images_Promote_Square">
                         <img className="left_Image_Promote" src={leftImagePromote} alt="iconAdvert" />
                         <img className="main_Image_Promote" src={mainImagePromote} alt="iconAdvert" />
                         <img className="right_Image_Promote" src={rightImagePromote} alt="iconAdvert" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Promote;