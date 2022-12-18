import React from "react";

import { SiGmail } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { GrCode } from 'react-icons/gr';


const gmailIco = <SiGmail className="social-icon gmail" />;
const githubIco = <FiGithub className="social-icon github" />;
const linkedinIco = <FaLinkedinIn className="social-icon linkedin" />;
const codeIco = <GrCode className="social-icon code" />;


const Socials = () => {

  return (
    <div className="social">
      <ul>
        <li>{codeIco}Greg Mrowczynski</li>
        <li>
          <a href="mailto:greg19850@gmail.com" target="_blank" rel="noreferrer">
            {gmailIco}
          </a>
        </li>
        <li>
          <a href="www.linkedin.com/in/greg-mrowczynski" target="_blank" rel="noreferrer">
            {linkedinIco}
          </a>
        </li>
        <li>
          <a href="https://github.com/greg19850" target="_blank" rel="noreferrer">
            {githubIco}
          </a>
        </li>
      </ul>
    </div >
  );
}

export default Socials;