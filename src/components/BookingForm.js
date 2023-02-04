import React, {useState} from 'react';
//import { useEffect } from "react"; 
import { useNavigate } from "react-router-dom";

//import { Link} from 'react-router-dom';

    
    const BookingForm= (props) => {
        const [Name, setName] = useState("");
        const [Phone, setPhone] = useState("");
        const [date, setDate] = useState("");
        const [time, setTime] = useState("");
        const [occasion, setOccasion] = useState("None");
        const [guests, setGuests] = useState(1);
        const [requirements, setRequirements] = useState("");

       

       const [bookingData, setBookingData] = useState([]); 
       
        const navigate = useNavigate();


        /* const fetchData = () => { 

          useEffect(() => { 

          console.log(JSON.stringify(bookingData));   
          try {
            
            fetch(`http://localhost:3000/public/bookings.json`, {
              method: 'POST',
              mode: 'cors', 
              cache: 'no-cache', 
              credentials: 'same-origin',
              headers: {
                    'Content-Type': 'application/json' },
              body: JSON.stringify(bookingData),
               })
               .then((response) => response.json()) 
               .then((data) => setBookingData(data)) 
              } 
            catch (err) {
             console.log(err);
           };
            },[]);
          
          }; */


   const handleSubmit =(e) => {
 
        e.preventDefault();
        setName("");
        setPhone("");
        setDate("");
        setTime("");
        setOccasion("None");
        setGuests(1);
        setRequirements("");
        
        bookingData.name=Name;
        bookingData.phone=Phone;
        bookingData.date=date;
        bookingData.time=time;
        bookingData.occasion=occasion;
        bookingData.guests=guests;
        bookingData.requirements=requirements;
        setBookingData(bookingData);
        
        //fetchData();

        alert( 
           'You have successfully reserved table : \n\n'+
                'Name: '+Name+'\n'+
                'Phone: '+Phone+'\n'+
                'Date: '+bookingData.date+'\n'+
                'Time: '+bookingData.time+'\n'+
                'Occasion: '+bookingData.occasion+'\n'+
                'Number of Guests: '+bookingData.guests+'\n'+
                'Special requirements: '+bookingData.requirements); 
        
             navigate("/confirmation");
             console.log('form submitted!');
      
      };

    return (
          
            <form id="bookingform" onSubmit={handleSubmit}>
               
               <label htmlFor="Name">Name:</label>
               <input type="text" id="Name" placeholder="Name"  minLength={2}
                 maxLength={30}
                  value={Name} onChange={(e) => {setName(e.target.value);}} required></input>

               <label htmlFor="Phone">Phone number</label>
               <input type="tel" id="Phone" placeholder="Phone number" 
                  value={Phone} onChange={(e) => setPhone(e.target.value)} required
                  minLength={8}></input>

               <label htmlFor="date">Date:</label>
               <input type="date" id="date"
                  value={date} onChange={(e) => setDate(e.target.value)} required></input>

              
               <label htmlFor="res-time">Time:</label> 
               <select id="res-time" value={time} required onChange={(e) => 
                  {setTime(e.target.value)   } }  >
               
                  <option value={props.availableTimes[0]}>{props.availableTimes[0]}</option>
                  <option value={props.availableTimes[1]}>{props.availableTimes[1]}</option>
                  <option value={props.availableTimes[2]}>{props.availableTimes[2]}</option>
                  <option value={props.availableTimes[3]}>{props.availableTimes[3]}</option>
                  <option value={props.availableTimes[4]}>{props.availableTimes[4]}</option>
                  <option value={props.availableTimes[5]}>{props.availableTimes[5]}</option>
                  {/* <option>{'17:00'}</option>
                  <option>{'18:00'}</option>
                  <option>{'19:00'}</option>
                  <option>{'20:00'}</option>
                  <option>{'21:00'}</option>
                  <option>{'22:00'}</option>
                    */}
                 </select> 
             
                      
               <label htmlFor="occasion">Occasion</label> 
               <select id="occasion" value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}>
                  <option>None</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Other</option>
                </select>
               <label htmlFor="guests">Number of Guests</label>
               <input type="number" id="guests" min="1" max="30"
                  value={guests} onChange={(e) => setGuests(e.target.value)} required></input>

               <label htmlFor="requirements">Special requirements:</label>
               <textarea rows="4" id="requirements" 
                  value={requirements} onChange={(e) => setRequirements(e.target.value)}>
               </textarea>
               
               <button type="submit" id="reserve-table-btn" 
                  disabled={!Name||!Phone||!date}>Submit
               
               </button>
           </form>
           
    );
                  };
export default BookingForm;