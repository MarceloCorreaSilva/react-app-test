import React from 'react';
import Menu from '../Menu';

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}

export default PageDefault;
