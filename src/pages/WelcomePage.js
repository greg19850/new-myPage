import React from 'react';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/WelcomePage.scss';

import myPhoto from '../img/computer-g7bcfa12a3_640.jpg';

const WelcomePage = () => {
  const welcomeMessage = <p className='welcome-text text-center'>Hi, I'm Greg. <br /> Welcome to my personal page</p>

  return (
    <Container className='welcome-page py-5'>
      <Row>
        <Col className='text-container'>
          {welcomeMessage}
        </Col>
        <Col className='welcome-img'>
          <Image className='img-fluid' rounded src={myPhoto} alt="Welcome photo" />
        </Col>
      </Row>
    </Container>
  );
}

export default WelcomePage;