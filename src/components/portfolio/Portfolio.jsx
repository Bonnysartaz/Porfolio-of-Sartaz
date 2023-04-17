import React from 'react';
import IMG1 from '../../assets/mse.PNG';
import IMG2 from '../../assets/web.PNG';
import IMG3 from '../../assets/cad.PNG';
import IMG4 from '../../assets/gra.PNG';
import IMG5 from '../../assets/com.PNG';
import IMG6 from '../../assets/ran.PNG';

import './portfolio.css';
import { NavLink } from "react-router-dom"

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Academic',
      img: IMG1,
      description:
        'These are some academic works I have done',
      technologies: 'Technologies I have used :   Microsoft Office | MatLab | ImageJ | Origin | CAD tools etc.',

      navlink : 'mat',
    },
    {
      id: 2,
      title: 'Web development',
      img: IMG2,
      description:
        'These are some of my achievements and some wev development projects I have done',
      technologies: 'Technologies I have used :  CSS | JavaScript | React | Vue | Next | ThreeJS | MongoDB | Firebase | Node etc.',
      navlink : 'web',
    },
    {
      id: 3,
      title: 'Computer Aided Design',
      img: IMG3,
      description: 'These are some of my achievements and some CAD projects I have done',
      technologies: 'Technologies I have used : SolidWorks | Autocad',

      navlink : 'cad',
    },
    {
      id: 4,
      title: 'Graphics Design',
      img: IMG4,
      description:
        'These are some designs I have done',
      technologies: 'Technologies I have used : Adobe Photoshop | Adobe Illustrator | Figma | Blender',
      navlink : 'gra',
    },
    {
      id: 5,
      title: 'Competitions',
      img: IMG5,
      description:
        'These are some of the competions I have attended',
      technologies: 'Competitions : Hult Prize | Formula Student | Business Case Competition | Robotic Competition',
      navlink : 'bus',
    },
    {
      id: 6,
      title: 'Miscellaneous',
      img: IMG6,
      description:
        'Some Random things I have done',
      technologies: '',
      navlink : 'misc',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
          
             <NavLink className="btn btn-primary" to={pro.navlink}>View Details</NavLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
