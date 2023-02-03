
import BookingForm from './BookingForm';
import {useReducer} from 'react';


const BookingPage= () => {

   let output=[];
    const [availableTimes, setAvailableTimes] = useReducer(updateTimes(),initializeTimes());

    function initializeTimes(){
       output=['17:00','18:00','19:00','20:00','21:00','22:00'];
       //updateTimes(7);
        return output;
      }

    function updateTimes() {
        output.splice(0,1);
        return output;
    }   
 
   
     return (
        <div id="bookingformdiv">
           <h1 id="bookingtitle">Booking a table</h1>

           <BookingForm  availableTimes={availableTimes} updateTimes={setAvailableTimes}/>
        </div>);
   };

export default BookingPage;
