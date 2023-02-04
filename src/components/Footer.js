import {Link} from 'react-router-dom';

const Footer = () => {
    return (
      <footer id="footer">
        <img src="../assets/img/logo_footer.png" alt="icon"/>
        <nav id="footer_nav">
            <ul>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/about" className="nav-item">About</Link></li>
                <li><Link to="/highlights" className="nav-item">Menu</Link></li>
                <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                <li><Link to="/order" className="nav-item">Order Online</Link></li>
                <li><Link to="/login" className="nav-item">Login</Link></li>
            </ul>
        </nav>
        <section id="contact">
            <h4>Contact</h4>
            <ul>
                <li>Address</li>
                <li>Email</li>
                <li>Phone Number</li>
            </ul>
        </section>
        <section id="social_links">
            <h4>Connect</h4>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Join Us!</li>
            </ul>
        </section>
      </footer>
    );
  };
  
  export default Footer;