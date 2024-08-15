import React from 'react';
import logo from '../assets/images/logo.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import whatsapp from '../assets/images/whatsapp.png';
import '../assets/css/Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <>
      <div className="subscribe-section">
        <h1 className="subscribe-title">
          <span className="subscribe-highlight">Subscribe</span> us for news, events, and offers
        </h1>
        <div className="subscribe-input-container">
          <input type="text" placeholder="Enter your email..." className="subscribe-input" />
          <button className="subscribe-button"> Submit </button>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-left">
          <NavLink to='/'><img src={logo} alt="Logo" /></NavLink>
          <p className="footer-desc">
            Discover, showcase, and build with us. Buyers find trends, vendors showcase standouts, and stores establish identity. Join our dynamic e-commerce community for extraordinary connections.
          </p>
        </div>

        <div className="footer-center">
          <h3 className="footer-title">Useful Links</h3>
          <div>
            <ul className="footer-list">
              <li className="footer-list-item">Home</li>
              <li className="footer-list-item">Best selling</li>
              <li className="footer-list-item">Products</li>
              <li className="footer-list-item">Events</li>
              <li className="footer-list-item">Faqs</li>
            </ul>
            <ul className="footer-list">
              <li className="footer-list-item">Wishlist</li>
              <li className="footer-list-item">My cart</li>
              <li className="footer-list-item">Profile</li>
              <li className="footer-list-item">Settings</li>
              <li className="footer-list-item">Support</li>
            </ul>
          </div>
        </div>

        <div className="footer-right">
          <h3 className="footer-title">Contact</h3>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>&nbsp; New York, USA 10011
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>&nbsp; +1 203 435 9429
          </div>
          <div className="contact-item">
            <i className="far fa-envelope-open"></i>&nbsp; nexus11111998@gmail.com
          </div>
          <div className="social-container">
            <img src={whatsapp} alt="WhatsApp" />
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
          </div>
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment" className="payment" />
        </div>
      </div>
    </>
  );
};

export default Footer;
