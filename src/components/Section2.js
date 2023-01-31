const Section2= () => {
    return (
      <section id="highlights">
        <div id="row1">
           <h2>This week specials!</h2>
           <button type="button" >Online Order</button>
        </div>
        <div id="row2">
          <section id="card1" class="card">
            <img src="../assets/img/greek salad.jpg" alt="salad"/>
            <div class="row3">
               <span class="left">Greek salad</span>
               <span class="right">$ 10.75</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra,
               lorem nec interdum finibus, augue.</p>
            <button type="button">Order a delivery</button>
          </section>
          <section id="card2" class="card">
            <img src="../assets/img/Bruschetta.jpg" alt="bruschetta"/>
            <div class="row3">
                <span class="left">Bruschetta</span>
                <span class="right">$ 8.50</span>
            </div>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pharetra,
               lorem nec interdum finibus, augue.</p>
            <button type="button">Order a delivery</button>
          </section>
          <section id="card3" class="card">
            <img src="../assets/img/lemon dessert.jpg" alt="lemondessert"/>
            <div class="row3">
               <span class="left">Lemon Dessert</span>
               <span class="right">$ 9.45</span>
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