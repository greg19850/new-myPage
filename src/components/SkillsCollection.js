import React from 'react';

import { SiJavascript, SiReact, SiHtml5, SiCss3, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiHeroku, SiNetlify, SiVercel, SiGit, SiGithub, SiJest, SiBootstrap } from 'react-icons/si'

const serviceArray = [
  {
    id: 1,
    logo: SiJavascript,
    title: 'JavaScript',
    color: '#f0db4f'
  },
  {
    id: 2,
    logo: SiReact,
    title: 'React',
    color: '#88dded'
  },
  {
    id: 3,
    logo: SiHtml5,
    title: 'HTML',
    color: '#e34c26'
  },
  {
    id: 4,
    logo: SiCss3,
    title: 'CSS',
    color: '#264de4'
  },
  {
    id: 5,
    logo: SiTypescript,
    title: 'TypeScript',
    color: '#007acc'
  },
  {
    id: 6,
    logo: SiNodedotjs,
    title: 'Node JS',
    color: '#3c873a'
  },
  {
    id: 7,
    logo: SiExpress,
    title: 'Express JS',
    color: '#303030'
  },
  {
    id: 8,
    logo: SiMongodb,
    title: 'Mongo DB',
    color: '#3FA037'
  },
  {
    id: 9,
    logo: SiPostgresql,
    title: 'PostgreSQL',
    color: '#336791'
  },
  {
    id: 10,
    logo: SiGit,
    title: 'Git',
    color: '#F1502F'
  },
  {
    id: 11,
    logo: SiGithub,
    title: 'Github',
    color: '#000'
  },
  {
    id: 12,
    logo: SiJest,
    title: 'Jest',
    color: '#C63D14'
  },
  {
    id: 13,
    logo: SiBootstrap,
    title: 'Bootstrap 5',
    color: '#563d7c'
  },
  {
    id: 14,
    logo: SiHeroku,
    title: 'Heroku',
    color: '#6762A6'
  },
  {
    id: 15,
    logo: SiNetlify,
    title: 'Netlify',
    color: '#00C7B7'
  },
  {
    id: 16,
    logo: SiVercel,
    title: 'Vercel',
    color: '#fff'
  },
]

const SkillsCollection = () => {
  const services = serviceArray.map(service => (
    <div
      key={service.id}
      className='service-item p-2'
    >
      <service.logo
        className='service-icon mb-3'
        style={{
          color: service.color,
          backgroundColor: service.id === 16 && '#000'
        }}
      />
      <h3 className='service-title'>
        {service.title}
      </h3>
    </div>
  ))

  return (
    <div className='service-container'>
      {services}
    </div>
  );
}

export default SkillsCollection;