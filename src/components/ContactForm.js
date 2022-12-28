import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {
  return (
    <Form className="form" >
      <Form.Group className="mb-2" controlId="formName">
        <Form.Label className='label col-form-label-sm fw-bold mb-0'>Name*</Form.Label>
        <Form.Control type='text' size='sm' className='border rounded-0' placeholder="Enter your name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-2" controlId="formCompany">
        <Form.Label className='label col-form-label-sm fw-bold mb-0'>Organisation</Form.Label>
        <Form.Control type='text' size='sm' className='border rounded-0' placeholder="Enter your company name" />
      </Form.Group>

      <div className="row g-2">
        <div className="col-auto">
          <Form.Group className="mb-2" controlId="formEmail">
            <Form.Label className='label col-form-label-sm fw-bold mb-0'>Email*</Form.Label>
            <Form.Control type="email" size='sm' className='border rounded-0' placeholder="Enter your email" />
          </Form.Group>
        </div>
        <div className="col-auto">
          <Form.Group className="mb-2" controlId="formPhone">
            <Form.Label className='label col-form-label-sm fw-bold mb-0'>Phone</Form.Label>
            <Form.Control type='tel' size='sm' className='border rounded-0' placeholder="Enter your phone number" />
          </Form.Group>
        </div>
      </div>
      <Form.Group className="mb-2" controlId="formSubject">
        <Form.Label className='label col-form-label-sm fw-bold mb-0'>Subject*</Form.Label>
        <Form.Control type='text' size='sm' className='border rounded-0' placeholder="Enter subject of message" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTextArea">
        <Form.Label className='label col-form-label-sm fw-bold mb-0'>Message*</Form.Label>
        <Form.Control as="textarea" size='sm' className='border rounded-0' rows={3} placeholder="Enter your message" />
      </Form.Group>

      <Button variant="warning" className='btn d-grid gap-2 col-5 mb-3 rounded-0 float-end' type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;