import React from 'react'
import styled from 'styled-components';
import VectorCloud from '../styles/icons/VectorCloud.png'
import VectorShield from '../styles/icons/VectorShield.png'
import VectorCSV from '../styles/icons/VectorCSV.png'
import VectorPDF from '../styles/icons/VectorPDF.png'

const Container =styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#FFFFFF;
    `
const styles = {
    left:'34%',
    top:"27%",
}
const Technology = ()=> {
   
    return (
        <Container>
            <h2 className="tech_Title">Technology</h2>  
          <div className="tech_Container">
                    
                    <div className="tech_Box">
                        <h3 className="tech_NumberH3">01</h3>
                        <h2 className="tech_Desc_H2">Cloud Storage</h2>
                        <p className="tech_P">Access your account from anywhere in the world on any device</p>
                        <img style={styles} className="tech_ImgVector" src={VectorCloud} alt="imageVector" />

                    </div>

                    <div className="tech_Box">
                        <h3 className="tech_NumberH3">02</h3>
                        <h2 className="tech_Desc_H2">Secure</h2>
                        <p className="tech_P">All your information is stored on secure cloud servers</p>
                        <img className="tech_ImgVector" src={VectorShield} alt="imageVector" />

                    </div>

                    <div className="tech_Box">
                        <h3 className="tech_NumberH3">03</h3>
                        <h2 className="tech_Desc_H2">PDF Download</h2>
                        <p className="tech_P">Download any of your reports in PDF format</p>
                        <img className="tech_ImgVector" src={VectorPDF} alt="imageVector" />

                    </div>

                    <div className="tech_Box">
                        <h3 className="tech_NumberH3">04</h3>
                        <h2 className="tech_Desc_H2">CSV Download</h2>
                        <p className="tech_P">All your information is stored on secure cloud servers</p>
                        <img className="tech_ImgVector" src={VectorCSV} alt="imageVector" />

                    </div>
          </div>
        </Container>
    )
}
export default Technology;