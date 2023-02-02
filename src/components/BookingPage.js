const BookingPage= () => {
    return (
        <div id="bookingformdiv">
           <h1 id="bookingtitle">Booking a table</h1>

           <form id="bookingform">
               
               <label for="name">Name:</label>
               <input type="text" id="name" placeholder="Name" required></input>
               <label for="phone">Phone number:</label>
               <input type="tel" id="phone" placeholder="Phone number" required></input>
               <label for="date">Date:</label>
               <input type="date" id="date"></input>
               <label for="time">Time:</label>
               <input type="time" id="time"></input>
               <label for="number_of_guests">Number of Guests:</label>
               <input type="number" id="number_of_guests" min="1" max="12"></input>
               <label for="requirements">Special requirements:</label>
               <textarea rows="4" id="requirements"></textarea>
               <button type="submit" id="reserve-table-btn">Reserve</button>
           </form>
        </div>);
};

export default BookingPage;
