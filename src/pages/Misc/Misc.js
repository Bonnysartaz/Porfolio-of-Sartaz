import AnimatedPage from "../../components/animation/AnimatedPage";
import Topbar from '../../components/topbar/Topbar';

import p1 from '../../assets/p1.jpeg';
import p2 from '../../assets/p2.jpeg';
import p3 from '../../assets/p3.jpeg';
import p4 from '../../assets/p4.jpeg';
import p5 from '../../assets/riv.jpg';
import p6 from '../../assets/sik.jpg';

import './misc.css';


export default function Bus() {
  return (
    <AnimatedPage>
      <Topbar/>
    <div className="about">
      <h2 className="title">Miscellaneous</h2>
      


     
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >

          <h5 className='client__name'>Photos</h5>
          <small className="client__review">These are some of the photos I have taken, retouched and edited</small>
        </div>
        <div className="image">
            <img src={p3} alt="me" />
          </div>

          <div className="imagepad">
            <img src={p1} alt="me" />
          </div>

          <div className="imagepad">
            <img src={p2} alt="me" />
          </div>

          <div className="imagepad">
            <img src={p4} alt="me" />
          </div>

          
          <div className="imagepad">
            <img src={p5} alt="me" />
          </div>

          
          <div className="imagepad">
            <img src={p6} alt="me" />
          </div>
      
      
      </section>


    </div>
    </AnimatedPage>
  )
}