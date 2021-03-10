import React from 'react'
import styled from 'styled-components'
import firstAd from '../styles/images/firstAd.png';
import secondAd from '../styles/images/secondAd.png';
import thirdAd from '../styles/images/thirdAd.png';
//insted of define new class I created a simple wrapper to wrap h2 
//and three boxes in one insted of define h2 outside
   
const Container =styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#FAFAFA;
    `
const Features = ()=> {
    return (
        <Container>
        <h2 className="features_Title">Features</h2>  
          <div className="features_Container">  
            
                 <div className="add_Box">
                    <img className="addImage" src={firstAd} alt="advertBox" />
                        <div className="descritpion_Box">
                            <h3 className="features_H3">
                                 Supports All Currencies and Cards
                            </h3>
                                <p className="features_P">
                                    We support all popular currencies and is fully customizable to add
                                </p>
                        <h5 className="features_H5">
                            Read More
                        </h5>
                </div>
              </div>
              
              <div className="add_Box">
                    <img className="addImage" src={secondAd} alt="advertBox" />
                        <div className="descritpion_Box">
                            <h3 className="features_H3">
                                 Supports All Currencies and Cards
                            </h3>
                                <p className="features_P">
                                    We support all popular currencies and is fully customizable to add
                                </p>
                        <h5 className="features_H5">
                            Read More
                        </h5>
                </div>
              </div><div className="add_Box">
                    <img className="addImage" src={thirdAd} alt="advertBox" />
                        <div className="descritpion_Box">
                            <h3 className="features_H3">
                                 Supports All Currencies and Cards
                            </h3>
                                <p className="features_P">
                                    We support all popular currencies and is fully customizable to add
                                </p>
                        <h5 className="features_H5">
                            Read More
                        </h5>
                </div>
              </div>


          </div>
          </Container> 
    )
}
export default Features;