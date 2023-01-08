import React from 'react';

import Container from 'react-bootstrap/Container';

import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

import '../styles/Contact.scss'


const ContactPage = () => {
  return (
    <Container id='contact' className='contact'>
      {<ContactInfo />}
      {<ContactForm />}
    </Container>
  );
}

export default ContactPage;