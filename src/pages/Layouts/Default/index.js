import React from 'react';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

function Default({ children }) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}

export default Default;
