import React from 'react';
import DeltaNavbar from './Navbar';
import SignUpForm from './SignUpForm';
import Footer from './Footer';

function SignUpPage() {
  return (
    <React.Fragment>
      <DeltaNavbar />
      <SignUpForm />
      <Footer />
    </React.Fragment>
  );
}

export default SignUpPage;
