import tile1 from '../assets/tile1.jpeg';
import tile2 from '../assets/tile2.jpeg';
import tile3 from '../assets/tile3.jpeg';

function LandingPage() {
    return (
      <div>
        <div className="hero-content"></div>
        <div className="section1">
          <div className="left-column"></div>
          <div className="right-column">
            <h2>Unlock Your Musical Potential</h2>
            <p>At our music school, we're passionate about helping you discover the joy of music. Whether you're a complete beginner or looking to refine your skills, we offer a wide range of music lessons tailored to your needs.</p>
            <a href="/signup" className="subscribe-link">SIGN UP TODAY</a>
          </div>
        </div>
        <div className="section2-container">
          <h2>Discover your sound</h2>
          <div className="tiles-container">
            <div className="tile">
              <img src={tile1} alt="Container 1" />
              <h2>PIANO</h2>
              <p>Dive into the world of keys and chords with our piano lessons. Unleash your inner maestro, whether you're tinkling your first notes or composing your opus.</p>
            </div>
            <div className="tile">
              <img src={tile2} alt="Container 2" />
              <h2>FLUTE</h2>
              <p>Let your breath become melody with our enchanting flute lessons. From soft whispers to spirited trills, find your musical voice as you dance with the wind.</p>
            </div>
            <div className="tile">
              <img src={tile3} alt="Container 3" />
              <h2>GUITAR</h2>
              <p>Strum, pluck, and rock your world through our guitar lessons. Whether you're serenading under the stars or jamming like a legend, let your strings tell your story.</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LandingPage;