import React from 'react'

const Contact =()=> {
    return (
        <>
              <div className="contact_Contaier">


<div className="contact_Left_Bar">
    <h2 className="contact_H2">Contact</h2>
    <h4 className="contact_H4">
    Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours
     </h4>
</div>


    <div className="contact_Right_Bar">
            <div className="personal_Data_Box">
                <input className="input_personal_Data" type="text" placeholder="First Name"/>
                <input className="input_personal_Data" type="text" placeholder="Last Name"/>
             </div>
        <input className="input_phone_Data" type="text" placeholder="Phone Number"/>
            <select className="select_Service_Data"  id="cars">
                <option  value="Select Service">Select Service</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <div className="contact_button">
                <input className="button_Submit" type="submit" value="Submit Now" />
            </div>     
    </div>
</div>
        </>
    )
}
export default Contact;