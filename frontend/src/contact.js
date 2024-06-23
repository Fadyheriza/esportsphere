import React from 'react';
import './Contact.css';
import fadyImage from './Fady.png';
import benediktImage from './Benedikt.jpg';
import fabioImage from './Fabio.jpg';

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="box">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-content">
          <p className="contact-text">
            If you have any questions or need further information, feel free to reach out to us. We are here to help you and provide the best service possible. Our team is available to assist you with any inquiries you may have.
          </p>
          <div className="contact-images">
            <div className="image-box">
              <img src={fadyImage} alt="Fady Heriza" className="contact-image" />
              <p className="image-text">Fady Heriza</p>
            </div>
            <div className="image-box">
              <img src={benediktImage} alt="Benedikt Aigner" className="contact-image" />
              <p className="image-text">Benedikt Aigner</p>
            </div>
            <div className="image-box">
              <img src={fabioImage} alt="Fabio Jindrak" className="contact-image" />
              <p className="image-text">Fabio Jindrak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;