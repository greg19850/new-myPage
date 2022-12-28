import React from 'react';

import ProjectsList from '../components/ProjectsList';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

import '../styles/Projects.scss'

const ProjectsPage = () => {
  return (
    <div id='projects' className='projects'>
      <h2>Past Projects:</h2>
      <Carousel variant="dark" interval={null}>
        {ProjectsList.map(project => (
          <Carousel.Item className='carousel'>
            <div className='project-card'>
              <div className='img-container'>
                <Image
                  className='card-img'
                  src={project.img}
                  alt={project.title}
                />
              </div>
              <div className='card-text'>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <div className="buttons">
                  <Button href={project.link1} target="_blank" variant="warning" className='button  rounded-0' size='lg'>Website</Button>
                  <Button href={project.link2} target="_blank" variant="warning" className='button rounded-0' size='lg'>Github</Button>
                </div>
                <div className='technologies'>
                  <h5>Used Technologies:</h5>
                  {project.technologies.map(tech => tech)}
                </div>
              </div>
            </div>
          </Carousel.Item>
        )
        )}
      </Carousel>
    </div>
  );
}

export default ProjectsPage