import React from 'react';
import Menu from '../../../components/Menu';

function Default({ children }) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}

export default Default;
