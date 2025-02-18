import React from 'react';
import './Announcement.css';
import Container from "../Container/Container";

import image1 from "../../../images/announcement1.png"
import image2 from "../../../images/announcement2.png"
import image3 from "../../../images/announcement3.png"
import image4 from "../../../images/announcement4.png"
import image5 from "../../../images/announcement5.png"
import image6 from "../../../images/announcement6.png"
import image7 from "../../../images/announcement7.png"
import image8 from "../../../images/announcement8.png"
import image9 from "../../../images/announcement9.png"

const Announcement = () => {
  return (
    <section className='announcement'>
       <Container>
            <h2 className='announcement__title-section'>Останні оголошення</h2>
            <ul className='announcement__list'>
                <li className='announcement__item'>
                    <img className='announcement__image' src={image1} alt="announcement" />
                    <h4 className='announcement__title'>Vila Gale Lagos Hotel</h4>
                    <p className='announcement__description'>Andresen, Portugal </p>
                </li>
                <li className='announcement__item'>
                    <img className='announcement__image' src={image2} alt="announcement" />
                    <h4 className='announcement__title'>Cala Moresca </h4>
                    <p className='announcement__description'>Via Faro, Italy</p>
                </li>
                <li className='announcement__item'>
                    <img className='announcement__image' src={image3} alt="announcement" />
                    <h4 className='announcement__title'>Horison Blu</h4>
                    <p className='announcement__description'>Petrou Karakousi, Greece</p>
                </li>
                <li className='announcement__item'>
                    <img className='announcement__image' src={image4} alt="announcement" />
                    <h4 className='announcement__title'>Le Galion Hotel</h4>
                    <p className='announcement__description'>Saint-Martin-de-Re, France</p>
                </li>
                <li className='announcement__item'>
                    <img className='announcement__image' src={image5} alt="announcement" />
                    <h4 className='announcement__title'>Molitor Hotel</h4>
                    <p className='announcement__description'>Paris, France</p>
                </li>
                <li className='announcement__item'>
                    <img className='announcement__image' src={image6} alt="announcement" />
                    <h4 className='announcement__title'>Sierra de Meira</h4>
                    <p className='announcement__description'>Madrid, Spain</p>
                </li>
                <li className='announcement__item'>
                    <img className='announcement__image' src={image7} alt="announcement" />
                    <h4 className='announcement__title'>Petit Hotel</h4>
                    <p className='announcement__description'>Madrid, Spain</p>
                </li>
                <li className='announcement__item'>
                    <img className='announcement__image' src={image8} alt="announcement" />
                    <h4 className='announcement__title'>Gran Hotel</h4>
                    <p className='announcement__description'>Alicante, Spain</p>
                </li>
                <li className='announcement__item'>
                    <img className='announcement__image' src={image9} alt="announcement" />
                    <h4 className='announcement__title'>KViHotel</h4>
                    <p className='announcement__description'>Madrid, Spain</p>
                </li>
            </ul>
        </Container>
    </section>
  );
};

export default Announcement;