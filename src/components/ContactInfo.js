import React from "react";

import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si"

const gmailIco = <SiGmail className="social-icon gmail" />
const linkedinIco = <SiLinkedin className="social-icon linkedin" />;
const githubIco = <SiGithub className="social-icon github" />

const contacts = [
  {
    id: 1,
    name: "greg19850@gmail.com",
    link: "mailto:greg19850@gmail.com",
    logo: gmailIco,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://linkedin.com/in/greg-mrowczynski",
    logo: linkedinIco,
  },
  {
    id: 3,
    name: "Github",
    link: "https://github.com/greg19850",
    logo: githubIco,
  }
]

const ContactInfo = () => {
  const contactPages = contacts.map(contact => (
    <li key={contact.id}><a className="link" href={contact.link} target="_blank" rel="noreferrer">{contact.logo}</a></li>
  ))
  return (
    <div className='contact-info'>
      <h2>Contact</h2>
      <p>If you would like to get in touch, please use contact form, or any of below links:</p>
      <p>greg19850@gmail.com</p>
      <ul className="contact-social">
        {contactPages}
      </ul>
    </div>
  );
};

export default ContactInfo;