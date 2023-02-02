import React, {useState} from 'react';

    
    const BookingForm= () => {
        const [Name, setName] = useState("");
        const [Phone, setPhone] = useState("");
        const [date, setDate] = useState("");
        const [time, setTime] = useState("");
        const [occasion, setOccasion] = useState("");
        const [guests, setGuests] = useState("");
        const [requirements, setRequirements] = useState("");
   
        
        const [availableTimes, setavailableTimes] = useState(['17:00','18:00','19:00','20:00','21:00','22:00']);
   
         

        function handleClick(){
      
            setavailableTimes(availableTimes);
         }


        return (

            <form id="bookingform">
               
               <label htmlFor="Name">Name:</label>
               <input type="text" id="Name" placeholder="Name"  minLength={2}
                 maxLength={30}
                  value={Name} onChange={(e) => setName(e.target.value)} required></input>

               <label htmlFor="Phone">Phone number:</label>
               <input type="tel" id="Phone" placeholder="Phone number" 
                  value={Phone} onChange={(e) => setPhone(e.target.value)} required></input>

               <label htmlFor="date">Date:</label>
               <input type="date" id="date"
                  value={date} onChange={(e) => setDate(e.target.value)} required></input>

               {/* <label htmlFor="time">Time:</label>
                <input type="time" id="time" 
                  value={time} onChange={(e) => setTime(e.target.value)} required></input> */}
               <label htmlFor="res-time">Occasion</label> 
               <select id="res-time" value={time}
                  onChange={(e) => {setTime(e.target.value);}}>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
                      
               <label htmlFor="occasion">Occasion</label> 
               <select id="occasion" value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}>
                  <option>None</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Other</option>
                </select>

               <label htmlFor="guests">Number of Guests:</label>
               <input type="number" id="guests" min="1" max="30"
                  value={guests} onChange={(e) => setGuests(e.target.value)} required></input>

               <label htmlFor="requirements">Special requirements:</label>
               <textarea rows="4" id="requirements"
                  value={requirements} onChange={(e) => setRequirements(e.target.value)}>
               </textarea>

               <button type="submit" id="reserve-table-btn" onClick={handleClick}>Reserve</button>
           </form>
    );
};
export default BookingForm;