import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { SiGmail } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';

const gmailIco = <SiGmail className="social-icon gmail" />;
const githubIco = <FiGithub className="social-icon github" />;
const linkedinIco = <FaLinkedinIn className="social-icon linkedin" />;
const codeIco = <HiCode className="social-icon code" />;

const Navigation = () => {
  return (
    <Navbar id='home' className='bg-transparent' bg="dark" variant="dark" expand="lg">
      <Navbar.Brand className='name' href="#home">
        {codeIco} Greg Mrowczynski
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav >
          <Nav.Link className='link' href="#home">
            Home
          </Nav.Link>
          <Nav.Link className='link' href="#profile">
            Profile
          </Nav.Link>
          <Nav.Link className='link' href="#skills">
            Skills
          </Nav.Link>
          <Nav.Link className='link' href="#projects">
            Projects
          </Nav.Link>
          <Nav.Link className='link' href="#contact">
            Contact
          </Nav.Link>
        </Nav>
        {/* <Nav className="flex-row">
          <Nav.Link className='link social-link' href="mailto:greg19850@gmail.com" target="_blank" rel="noreferrer">
            {gmailIco}
          </Nav.Link>
          <Nav.Link className='link social-link' href="www.linkedin.com/in/greg-mrowczynski" target="_blank" rel="noreferrer">
            {linkedinIco}
          </Nav.Link>
          <Nav.Link className='link social-link' href="https://github.com/greg19850" target="_blank" rel="noreferrer">
            {githubIco}
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;