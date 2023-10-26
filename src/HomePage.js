import React from 'react';
import DeltaNavbar from './Navbar';
import Cablegif from './Cablegif';
import DeltaInternetCard from './InternetPackageCard';
import RocketContainer from './RocketContainer';
import Footer from './Footer';

function HomePage() {
  return (
    <React.Fragment>
      <DeltaNavbar />
      <Cablegif />
      <DeltaInternetCard />
      <RocketContainer />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
