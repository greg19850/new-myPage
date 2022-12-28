import React from 'react';

import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

import '../styles/Contact.scss'


const ContactPage = () => {
  return (
    <div id='contact' className='contact'>
      {<ContactInfo />}
      {<ContactForm />}
    </div>
  );
}

export default ContactPage;