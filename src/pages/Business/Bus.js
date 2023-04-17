import AnimatedPage from "../../components/animation/AnimatedPage";
import Topbar from '../../components/topbar/Topbar';
import { BsGlobe2 } from 'react-icons/bs';
import HULT from '../../assets/HULT.jpeg';
import PRIZE from '../../assets/prize.jpeg';
import FOR from '../../assets/For.png';
import ROV from '../../assets/rov.jpeg';
import NASA from '../../assets/nasa.PNG';
import IPE from '../../assets/ipe.jpeg';
import ROBO from '../../assets/Robo.jpeg';

import './bus.css';


export default function Bus() {
  return (
    <AnimatedPage>
      <Topbar/>
    <div className="about">
      <h2 className="title">Competitions</h2>
      



      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://www.hultprize.org" target="_blank" rel="noreferrer">
              <BsGlobe2/>
            </a>
            
          </div>
          <h5 className='client__name'>HULT PRIZE</h5>
          <small className="client__review">The Hult Prize challenges young people around the world to solve the planet's most pressing issues through social entrepreneurship.</small>
        </div>
        <div className="image">
            <img src={HULT} alt="me" />
          </div>

          <div className="imagepad">
            <img src={PRIZE} alt="me" />
          </div>
          
      
      </section>

      
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://www.facebook.com/annexe.ruet" target="_blank" rel="noreferrer">
              <BsGlobe2 />
            </a>
            
          </div>
          <h5 className='client__name'>NASA Rover challenge and Formula Student</h5>
          <small className="client__review">Team Annexe RUET is a club for engineering students. We as a team work , prepare and compete in various engneering competetions. Formula Student is a student engineering competition held annually all over the world. The NASA Human Exploration Rover Challenge encourages research and development of new technologies for future mission planning and crewed space missions to other worlds. </small>
        </div>
        <div className="image">
            <img src={FOR} alt="me" />
          </div>

          <div className="imagepad">
            <img src={NASA} alt="me" />
          </div>
          
          <div className="imagepad">
            <img src={ROV} alt="me" />
          </div>


      
      </section>

      
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >

          <h5 className='client__name'>RUET IPE Day Case Competition</h5>
          <small className="client__review">RUET IPE Day is a case competition which encourages student from universities around the country to solve businesses cases </small>
        </div>
        <div className="image">
            <img src={IPE} alt="me" />
          </div>
      
      </section>

      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >

          <h5 className='client__name'>Robotronics</h5>
          <small className="client__review"> Robotic Society of RUET organizes this event which is a project showcasing competition </small>
        </div>
        <div className="image">
            <img src={ROBO} alt="me" />
          </div>
      
      </section>

      



    </div>
    </AnimatedPage>
  )
}