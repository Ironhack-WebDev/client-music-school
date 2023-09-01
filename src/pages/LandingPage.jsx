import tile1 from '../assets/tile1.jpeg';
import tile2 from '../assets/tile2.jpeg';
import tile3 from '../assets/tile3.jpeg';
import header1 from "../assets/header1.jpeg"
import image1 from "../assets/landing-page1.jpeg"

function LandingPage() {
    return (
      <div>
        <div className="hero-content"></div>
        <div className="section1">
          <div className="left-column"></div>
          <div className="right-column">
            <p>At JavaJam music school, we're passionate about helping you discover the joy of music.</p>
            <p>Whether you're a complete beginner or looking to refine your skills, we offer a wide range of music lessons tailored to your needs.</p>
            <a href="/signup" className="subscribe-link">SIGN UP TODAY</a>
          </div>
        </div>
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
        <div className='section3'>
          <img src={image1} alt="section 3" />
        </div>
      </div>
    );
}

export default LandingPage;