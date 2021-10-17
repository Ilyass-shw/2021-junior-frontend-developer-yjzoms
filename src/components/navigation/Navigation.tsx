import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import download from '../../'
const Navigation: React.FC = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://www.alasco.de/wp-content/uploads/2019/11/Logotype.png"
            width="auto"
            height="24"
            className="d-inline-block align-top"
            alt="Alasco logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
