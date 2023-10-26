
import React from 'react';
import './ThankYou.css'; // Import your CSS file
import DeltaNavbar from './Navbar';
import Footer from './Footer';


const ComplaintThanks = () => {
  return (
    <div className="thank-you-container">
      <h2 className="thank-you-heading">Thank You for submitting your complaint!</h2>
      <p className="thank-you-paragraph">
        Your complaint has been registered, one of our support agents will get back to you within the next 24-48 hours. Thank you for using Delta Communication Network.
      </p>
    </div>
  );
};

function ComplaintThanksPage() {
  return (
    <React.Fragment>
      <DeltaNavbar />
      <ComplaintThanks />
      <Footer />
    </React.Fragment>
  );
}

export default ComplaintThanksPage;
