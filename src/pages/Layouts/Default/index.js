import React from 'react';
import styled from 'styled-components';

// Components
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

const Container = styled.div``;

function Default({ children }) {
  return (
    <>
      <Menu />
      <Container className="container">
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Default;
