const BookingPage= () => {
    return (
        <>
           <h1>Booking a table</h1>

           <form>
               <label for="firstname">Firstname</label>
               <input type="text" id="firstname" placeholder="firstname" required></input>
               <label for="lastname">Lastname</label>
               <input type="text" id="lastname" placeholder="lastname" required></input>
               <label for="phone">Phone number</label>
               <input type="tel" id="phone" placeholder="phone number" required></input>
               <label for="time">Date-Time</label>
               <input type="datetime-local" id="time"></input>
               <label for="guests_number"></label>
               <input type="number" id="guests_number" min="1" max="12"></input>
               <label for="requirements">Special requirements</label>
               <input type="text" id="requirements"></input>
               <button type="submit">Submit</button>
           </form>
        </>);
};

export default BookingPage;
