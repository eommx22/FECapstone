const Section2= () => {
    return (
      <section id="highlights">
        <div id="row1">
           <h2>This week specials!</h2>
           <button type="button" >Online Order</button>
        </div>
        <div id="row2">
          <section id="card1" className="card">
            <img src="../assets/img/greek salad.jpg" alt="salad"/>
            <div className="row3">
               <span className="left">Greek salad</span>
               <span className="right">$ 10.75</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra,
               lorem nec interdum finibus, augue.</p>
            <button type="button">Order a delivery</button>
          </section>
          <section id="card2" className="card">
            <img src="../assets/img/Bruschetta.jpg" alt="bruschetta"/>
            <div className="row3">
                <span className="left">Bruschetta</span>
                <span className="right">$ 8.50</span>
            </div>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra,
               lorem nec interdum finibus, augue.</p>
            <button type="button">Order a delivery</button>
          </section>
          <section id="card3" className="card">
            <img src="../assets/img/lemon dessert.jpg" alt="lemondessert"/>
            <div className="row3">
               <span className="left">Lemon Dessert</span>
               <span className="right">$ 9.45</span>
            </div>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nulla pharetra, lorem nec interdum finibus, augue.</p>
            <button type="button">Order a delivery</button>
          </section>
        </div>
      </section>
    );
  };
  
  export default Section2;