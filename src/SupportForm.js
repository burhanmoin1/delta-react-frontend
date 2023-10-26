import React, { useState } from 'react';
import './SupportForm.css';
import axios from 'axios';
import DeltaNavbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'; 


const SupportForm = () => {
  const [formData, setFormData] = useState({
    customer_complaint_name: '',
    complaint: '',
    customer_email: '',
    customer_phone: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      customer_complain_name: formData.customer_complaint_name,
      complaint: formData.complaint,
      customer_email: formData.customer_email,
      customer_phone: formData.customer_phone,
    };

    
    try {
       
        const response = await axios.post('http://localhost:8000/api/customer-complaint/', dataToSend);

            if (response.status === 201) {
                console.log('Complaint submitted successfully!');
                navigate('/complaint-registered');
            }

            } catch (error) {
            console.error('Server response data:', error.response.data);
            console.error(error);
            }
        };

  return (
    <div className="supportform-container">
         <h2>Contact Information</h2>
        <p>If you prefer to contact us directly, you can reach us using the following details:</p>
        <p>
          <strong>Address:</strong> Plot no.23-F, 3rd floor Muhammad Ali Society, Karachi
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+923219244672">+923219244672</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:deltacn@gmail.com">deltacn@gmail.com</a>
        </p>
        <br></br>

      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, please feel free to get in touch with us.</p>
      <p>For customer support, please use the form below:</p>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-divider">
          <label className='sup-label' htmlFor="customer_complaint_name">Full Name:</label>
          <input
            type="text"
            id="customer_complaint_name"
            name="customer_complaint_name"
            value={formData.customer_complaint_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-divider">
          <label className='sup-label' htmlFor="complaint">Complaint:</label>
          <textarea
            id="complaint"
            name="complaint"
            rows="4"
            cols="50"
            value={formData.complaint}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-divider">
          <label className='sup-label' htmlFor="customer_email">Email:</label>
          <input
            type="email"
            id="customer_email"
            name="customer_email"
            value={formData.customer_email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-divider">
          <label className='sup-label' htmlFor="customer_phone">Phone number:</label>
          <input
            type="tel"
            id="customer_phone"
            name="customer_phone"
            value={formData.customer_phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-divider">
          <button className="supportform-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

function SupportFormPage() {
  return (
    <React.Fragment>
      <DeltaNavbar />
      <SupportForm />
      <Footer />
    </React.Fragment>
  );
}

export default SupportFormPage;