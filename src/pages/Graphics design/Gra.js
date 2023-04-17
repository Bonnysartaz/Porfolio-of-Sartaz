import AnimatedPage from "../../components/animation/AnimatedPage";
import Topbar from '../../components/topbar/Topbar';
import MAR from '../../assets/Maroon.PNG';
import JIS from '../../assets/jisha.jpg';
import JAY from '../../assets/work6.PNG';
import CLUB from '../../assets/club.PNG';
import Tshirt from '../../assets/tshirt.PNG';
import MSE from '../../assets/mseTshirt.PNG';
import HOOD from '../../assets/hoodie.jpg';
import SPC from '../../assets/work4.PNG';
import SAD from '../../assets/work5.PNG';
import { BsGlobe2 } from 'react-icons/bs';
import './gra.css';



export default function Gra() {
  return (
    <AnimatedPage>
      <Topbar/>
    <div className="about">
      <h2 className="title">Graphics Design</h2>
      


      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://www.instagram.com/maroon_stains/" target="_blank" rel="noreferrer">
              <BsGlobe2 />
            </a>
            
          </div>
          <h5 className='client__name'>Maroon Stains</h5>
          <small className="client__review">Designed this logo for a small business (henna artist)</small>
        </div>
        <div className="image">
            <img src={MAR} alt="me" />
          </div>
      
      </section>

      
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >

          <h5 className='client__name'>Jisha's Mart</h5>
          <small className="client__review">Designed this logo for a small business</small>
        </div>
        <div className="image">
            <img src={JIS} alt="me" />
          </div>
      
      </section>

      
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >

          <h5 className='client__name'>Jayena's Mart</h5>
          <small className="client__review">Designed this logo for a small business</small>
        </div>
        <div className="image">
            <img src={JAY} alt="me" />
          </div>
      
      </section>

      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >

          <h5 className='client__name'>MSE CLUB</h5>
          <small className="client__review">Designed this logo for my department (Materials Science and Engineering Club)</small>
        </div>
        <div className="image">
            <img src={CLUB} alt="me" />
          </div>
      
      </section>



      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >

          <h5 className='client__name'>T-shirt Design</h5>
          <small className="client__review">Designed this T-shirt for myself (Ironman arc reactor) </small>
        </div>
        <div className="image">
            <img src={Tshirt} alt="me" />
          </div>
      
      </section>



      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >

          <h5 className='client__name'>MSE T-shirt</h5>
          <small className="client__review">Designed this logo for my department (Materials Science and Engineering)</small>
        </div>
        <div className="image">
            <img src={MSE} alt="me" />
          </div>
      
      </section>


      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >

          <h5 className='client__name'>RUET Old Bus</h5>
          <small className="client__review">Designed this out of passion</small>
        </div>
        <div className="image">
            <img src={HOOD} alt="me" />
          </div>
      
      </section>


      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >

          <h5 className='client__name'>Astronauts In Space</h5>
          <small className="client__review">Designed this out of passion</small>
        </div>
        <div className="image">
            <img src={SPC} alt="me" />
          </div>
      
      </section>


      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >

          <h5 className='client__name'>Frida Kahlo</h5>
          <small className="client__review">My version of Frida Kahlo. Designed this out of passion</small>
        </div>
        <div className="image">
            <img src={SAD} alt="me" />
          </div>
      
      </section>

    </div>
    </AnimatedPage>
  )
}