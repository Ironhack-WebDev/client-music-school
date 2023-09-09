import tile1 from '../assets/tile1.jpeg';
import tile2 from '../assets/tile2.jpeg';
import tile3 from '../assets/tile3.jpeg';
import tile4 from '../assets/tile4.jpeg';
import tile5 from '../assets/tile5.jpeg';
import tile6 from '../assets/tile6.jpeg';
import tile7 from '../assets/tile7.jpeg';
import tile8 from '../assets/tile8.jpeg';
import tile9 from '../assets/tile9.jpeg';
import logo from '../assets/logo.png';
import header1 from "../assets/header1.jpeg";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faChevronLeft, faChevronRight);

function LandingPage() {
  const CustomPrevArrow = (props) => (
    <div className="custom-arrow left-arrow" onClick={props.onClick}>
      <FontAwesomeIcon icon="chevron-left" />
    </div>
  );
  
  const CustomNextArrow = (props) => (
    <div className="custom-arrow right-arrow" onClick={props.onClick}>
      <FontAwesomeIcon icon="chevron-right" />
    </div>
  );
  

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

    return (
      <div>
        <div className="hero-content"></div>
        
        <div className="section2-container">
          <img src={header1} alt="header 1" />
          <div className="tiles-container">
            <div className="tile">
              <img src={tile1} alt="Container 1" />
              <h2>PIANO</h2>
              <p>Dive into the world of keys and chords as you unleash your inner maestro.</p>
            </div>
            <div className="tile">
              <img src={tile2} alt="Container 2" />
              <h2>FLUTE</h2>
              <p>From soft whispers to spirited trills, let your breath become an enchanted melody.</p>
            </div>
            <div className="tile">
              <img src={tile3} alt="Container 3" />
              <h2>GUITAR</h2>
              <p>Whether you're serenading under the stars or jamming like a legend, let your strings tell your story.</p>
            </div>
          </div>
        </div>

        <div className="section1">
          <div className="left-column"></div>
          <div className="right-column">
            <p>At JavaJam music school, we're passionate about helping you discover the joy of music.</p>
            <p>Whether you're a complete beginner or looking to refine your skills, we offer a wide range of music lessons tailored to your needs.</p>
            <a href="/signup" className="subscribe-link">SIGN UP TODAY</a>
          </div>
        </div>
        <div className='section3'>
        <Slider {...sliderSettings}>
          <div className='carousel-image'>
            <img src={tile4} alt='Tile 4' />
          </div>
          <div className='carousel-image'>
            <img src={tile5} alt='Tile 5' />
          </div>
          <div className='carousel-image'>
            <img src={tile6} alt='Tile 6' />
          </div>
          <div className='carousel-image'>
            <img src={tile7} alt='Tile 7' />
          </div>
          <div className='carousel-image'>
            <img src={tile8} alt='Tile 8' />
          </div>
          <div className='carousel-image'>
            <img src={tile9} alt='Tile 9' />
          </div>
        </Slider>
        </div>
        <div className="section4">
          <img src={logo} alt="Your Logo" className="logo" />
          <p>Created by:</p>
          <p>Charlotte: <a href="linkedinprofiledetails">linkedinprofiledetails</a></p>
          <p>Jess: <a href="linkedinprofiledetails">linkedinprofiledetails</a></p>
        </div>
    </div>
  );
}

export default LandingPage;
