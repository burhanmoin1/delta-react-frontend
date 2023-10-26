import React, { useRef } from 'react';
import './InternetPackage.css';
import { Link } from 'react-router-dom';


const InternetPackageCard = ({ packageData }) => {
  return (
    <div className="package-card">
        <h2 className='packageh2'>{packageData.name}</h2>
        <br></br>
        <p>Speed: {packageData.speed}</p><br></br>
        <p className='price'>Rs. {packageData.price}/month</p><br></br>
        {/* Signup button linking to the signup URL */}
        <Link to={'/signup'} className="homesignup-button">
          Sign Up
        </Link>
      </div>
  );
};

const DeltaInternetCard = () => {
  const containerRef = useRef(null);

  // Sample data for internet packages
  const packages = [
    { name: 'Basic', speed: '12 Mbps', price: '1,500' },
    { name: 'Standard', speed: '22 Mbps', price: '2,500' },
    { name: 'Premium', speed: '34 Mbps', price: '4,000' },
    { name: 'Flash', speed: '52 Mbps', price: '5,600' },
    { name: 'Rocket', speed: '102 Mbps', price: '9,500' },
  ];

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300; // Adjust the scroll distance as needed
    }
  };

  return (
      <div className="main-container">
        <button onClick={scrollLeft} className="scroll-button left">
          &lt; {/* Left arrow */}
        </button>
        <div className="packages-container" ref={containerRef}>
          {packages.map((packageData, index) => (
            <InternetPackageCard key={index} packageData={packageData} />
          ))}
        </div>
        <button onClick={scrollRight} className="scroll-button right">
          &gt; {/* Right arrow */}
        </button>
      </div>
  );
};

export default DeltaInternetCard;

