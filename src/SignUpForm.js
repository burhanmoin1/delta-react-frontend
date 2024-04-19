import React, { useState } from 'react';
import './SignUpForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [internetPackage, setInternetPackage] = useState('basic');
  const [cablePackage, setCablePackage] = useState('cable');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend.deltacommunication.xyz/api/create-customer/', {
        name: name,
        email: email,
        phone_number: phoneNumber,
        address: address,
        internet_package: internetPackage,
        cable_package: cablePackage
      });
      console.log(response.data);
      // If the request is successful, redirect to the thank you page
      navigate('/thankyou'); // Redirect to the thank you page
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };

  return (
    <div className="form-container">
      <form className="formsignup" onSubmit={handleSubmit}>
        <div className="sup-label">
          <h2 className="form-heading">Sign Up</h2>
          <p className="form-paragraph">Please fill in this form to create an account.</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className='internet-value'>
          <select value={internetPackage} onChange={(e) => setInternetPackage(e.target.value)}>
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="void">Void</option>
          </select>
        </div>
        <div className='internet-value'>
          <select value={cablePackage} onChange={(e) => setCablePackage(e.target.value)}>
            <option value="cable">Yes</option>
            <option value="no-cable">No</option>
          </select>
        </div>
        <button className="signup-button" type="submit">Create Customer</button>
      </form>
    </div>
  );
};

export default SignUpForm;
