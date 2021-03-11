import React,{useState,useEffect,useRef} from 'react'

const Contact =()=> {
const [name,setName] = useState('');
const [lastname,setLastName] = useState('');
const [number,setNumber] = useState('');
const [service,setService] = useState('');
const serviceRef = useRef();
const numberRef = useRef();
    useEffect(()=>{
    console.log(name);
    console.log(lastname);
    console.log(number);
    console.log(service);
  
    });
    //send all data to local storage and depending on these values we can send it to api with put method and
    // for example other component can have acces to these data and start working with this request from user

    const collectData =  () =>{
        localStorage.setItem('name', name);
        localStorage.setItem('last_name', lastname);
        localStorage.setItem('number', number);
        localStorage.setItem('service_name', service);
    }
    //check for empty number field if yes submit button is disabled
    const isInvalid = number === '';
    return (
        <>
    <div className="contact_Contaier">

        <div className="contact_Left_Bar">
            <h2 className="contact_H2">Contact</h2>
                <h4 className="contact_H4">
                     Questions or concerns? Just fill out the form below and our support team will get back to you within 24 hours
                 </h4>
        </div>

        <form onSubmit={collectData}>
            <div className="contact_Right_Bar">
                <div className="personal_Data_Box">
                    <input required className="input_personal_Data" value={name} type="text" placeholder="First Name" onChange={e=>setName(e.target.value)}/>
                    <input required className="input_personal_Data" type="text" placeholder="Last Name" onChange={e=>setLastName(e.target.value)}/>
            </div>
        <input ref={numberRef} required className="input_phone_Data" type="text" placeholder="Phone Number" onChange={e=>setNumber(e.target.value)}/>
            <select required className="select_Service_Data" ref={serviceRef}  id="services" onClick={()=>setService(serviceRef.current.value)}>
                <option value="Select Service">Select Service</option>
                <option value="Security">Security</option>
                <option value="Automation">Automation</option>
                <option value="DevOps">DevOps</option>
            </select>
            <div className="contact_button">
             
                <input disabled={isInvalid} className="button_Submit" type="submit" value="Submit Now" />
            
            </div>     
         </div>
    </form>
</div>
        </>
    )
}
export default Contact;