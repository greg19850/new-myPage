import React from 'react';

import ProjectsList from '../components/ProjectsList';

import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

import '../styles/Projects.scss'

const ProjectsPage = () => {

  return (
    <Container id='projects' className='projects text-center px-0 py-4'>
      <h2 className='my-4'>Past Projects:</h2>
      <Carousel className='carousel' variant="dark" interval={null}>
        {ProjectsList.map(project => (
          <Carousel.Item key={project.id} className='carousel-item'>
            <div className='project-card p-3'>
              <div className='img-container'>
                <Image
                  className='card-img'
                  src={project.img}
                  alt={project.title}
                />
              </div>
              <div className='card-text p-3'>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <div className="buttons">
                  <Button href={project.link1} target="_blank" variant="warning" className='button  rounded-0' size='lg'>Website</Button>
                  <Button href={project.link2} target="_blank" variant="warning" className='button rounded-0' size='lg'>Github</Button>
                </div>
                <div className='tech-container'>
                  <h5>Used Technologies:</h5>
                  <div className='technologies'>
                    {project.technologies.map(tech => <div key={Math.random() * 1000}>{tech}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel >
    </Container >
  );
}

export default ProjectsPage