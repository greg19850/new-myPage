import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        console.log(e.target.value);
        break;
      case 'company':
        setCompany(e.target.value)
        console.log(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value)
        break;
      case 'tel':
        setPhone(e.target.value)
        break;
      case 'subject':
        setSubject(e.target.value)
        break;
      case 'message':
        setMessage(e.target.value)
        break;
      default:
        return
    }
  };

  const handleFormSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form className="form" noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Form.Group className="mb-2" controlId="formName">
        <Form.Label className='label col-form-label-sm fw-bold mb-0'>Name*</Form.Label>
        <Form.Control type='text' name='name' size='sm' className='rounded-0' placeholder="Enter your name" value={name} onChange={handleInputChange} required />
        <Form.Control.Feedback type="invalid">
          Please enter your name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formCompany">
        <Form.Label className='label col-form-label-sm fw-bold mb-0'>Organisation</Form.Label>
        <Form.Control type='text' name='company' size='sm' className='border rounded-0' placeholder="Enter your company name" value={company} onChange={handleInputChange} />
      </Form.Group>

      <div className="row g-2">
        <div className="col-auto">
          <Form.Group className="mb-2" controlId="formEmail">
            <Form.Label className='label col-form-label-sm fw-bold mb-0'>Email*</Form.Label>
            <Form.Control type="email" name='email' size='sm' className='border rounded-0' placeholder="Enter your email" value={email} onChange={handleInputChange} required />
            <Form.Control.Feedback type="invalid">
              Please enter valid email address.
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="col-auto">
          <Form.Group className="mb-2" controlId="formPhone">
            <Form.Label className='label col-form-label-sm fw-bold mb-0'>Phone</Form.Label>
            <Form.Control type='tel' name='tel' size='sm' className='border rounded-0' placeholder="Enter your phone number" value={phone} onChange={handleInputChange} />
          </Form.Group>
        </div>
      </div>
      <Form.Group className="mb-2" controlId="formSubject">
        <Form.Label className='label col-form-label-sm fw-bold mb-0'>Subject*</Form.Label>
        <Form.Control type='text' name='subject' size='sm' className='border rounded-0' placeholder="Enter subject of message" value={subject} onChange={handleInputChange} required />
        <Form.Control.Feedback type="invalid">
          Please enter message subject.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTextArea">
        <Form.Label className='label col-form-label-sm fw-bold mb-0'>Message*</Form.Label>
        <Form.Control as="textarea" name='message' size='sm' className='border rounded-0' rows={3} placeholder="Enter your message" value={message} onChange={handleInputChange} required />
        <Form.Control.Feedback type="invalid">
          Please enter your message.
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="warning" className='btn d-grid gap-2 col-5 mb-3 rounded-0 float-end' type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;