import React from 'react';
import DeltaNavbar from './Navbar';
import Footer from './Footer';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="aboutus-container">
        <h2>Delta Communication Network</h2>
        <p>
        Delta Communication Network, established in 1999 and proudly licensed by the Pakistan Electronic Media Regulatory Authority, is committed to connecting the small community of Gulshan Iqbal and Muhammad Ali Society through reliable and high-speed internet and cable services. 
        </p>
        <h3>Our Mission</h3>
        <p>
        Our mission is to empower individuals and businesses with seamless communication solutions that enhance their lives, drive economic growth, and remain affordable for all.
        </p>
        We strive to consistently deliver exceptional customer experiences, invest in fiber optic technology, and support local initiatives in the area. Our commitment to bringing the digital realm to the masses through affordable and budget-friendly internet and cable services to ensure that every household and business can access the connectivity they need.
        <p>
        <br></br>
        At Delta Communication Network, we firmly believe that access to fast and dependable connectivity is a fundamental right, and that is why we are dedicated to reliable connectivity and exceptional customer support when needed.
        </p>
       </div>
    </div>
  );
};

function AboutUsPage() {
  return (
    <React.Fragment>
      <DeltaNavbar />
      <AboutUs />
      <Footer />
    </React.Fragment>
  );
}

export default AboutUsPage
