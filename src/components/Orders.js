import React,{useEffect,useState} from 'react'

export default function Orders() {
    const [name,setName] = useState('');
    const [lastname,setLastName] = useState('');
    const [number,setNumber] = useState('');
    const [service,setService] = useState('');

    useEffect(()=>{
        setName(localStorage.getItem('name'));
        setLastName(localStorage.getItem('last_name'));
        setNumber(localStorage.getItem('number'));
        setService(localStorage.getItem('service_name'));
    },[]);
    //There we can see our orders one per user, if we will go back co form and we will 
    //click button previous data will be replaced by new data
    return (
        <>
     
        <div className="orders_Container">
            <h1 className="order_requests">Requests</h1>
          <h2>Requester: {name} {lastname}</h2>
          <h3>Phone:{number}</h3>
          <h3>Service type:{service}</h3>
          <h3>State:Work in progres...</h3>
          <h5>*In case of urgent help please contact with our support team</h5>
        </div>
        </>
    )
}
