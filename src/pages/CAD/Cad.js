import AnimatedPage from "../../components/animation/AnimatedPage";
import Topbar from '../../components/topbar/Topbar';
import { BsDownload } from 'react-icons/bs';
import { BsGlobe} from 'react-icons/bs';


import CSWA from '../../assets/cswa.PNG';
import SCDR from '../../assets/Scader.jpeg';
import CAD1 from '../../assets/cad1.png';
import CAD2 from '../../assets/cad2.png';
import CAD3 from '../../assets/cad3.png';
import CAD4 from '../../assets/cad4.png';
import './cad.css';


export default function Cad() {
  return (
    <AnimatedPage>
      <Topbar/>
    <div className="about">

      <h2 className="title">Computer Aided Design</h2>
      



      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://www.solidworks.com/certifications/mechanical-design-cswa-mechanical-design" target="_blank" rel="noreferrer">
              <BsGlobe/>
            </a>
            
          </div>
          <h5 className='client__name'>Mechanical Design (CSWA–Mechanical Design)</h5>
          <small className="client__review">The CSWA certification is proof of your SOLIDWORKS® expertise with cutting-edge skills that businesses seek out and reward.</small>
        </div>
        <div className="image">
            <img src={CSWA} alt="me" />
          </div>
      
      </section>

      
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://www.facebook.com/scadr.ruet" target="_blank" rel="noreferrer">
            <BsGlobe/>
            </a>
            
          </div>
          <h5 className='client__name'>Society of Computer Aided Designers RUET- SCADR</h5>
          <small className="client__review">SCADR is basically a Computer Aided Design (CAD) club founded in RUET. We practice, share and invent</small>
        </div>
        <div className="image">
            <img src={SCDR} alt="me" />
          </div>
      
      </section>

      
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://github.com/Bonnysartaz/Pdfs/raw/main/FATIGUE-roll-10-20-22.pdf" target="_blank" rel="noreferrer">
              <BsDownload />
            </a>
            
          </div>
          <h5 className='client__name'>Simulating Fatigue Failure using FEA</h5>
          <small className="client__review">Fatigue failure of connecting rod was simulated. The test loads were applied through
dummy pins that replace the original crank pin and the
gudgeon. A sinusoidal waveform of 5 Hz was applied to the
connecting-rod assembly at the load levels from -177.2 kN
to +40.50 kN. The requirement was for 5x106 cycle, but the
connecting-rod fractured during cycles of 821078. Structural steel (AISI-1035) was used as material.
</small>
        </div>
        <div className="image">
            <img src={CAD1} alt="me" />
          </div>

          <div className="imagepad">
            <img src={CAD2} alt="me" />
          </div>

          <div className="imagepad">
            <img src={CAD3} alt="me" />
          </div>

          <div className="imagepad">
            <img src={CAD4} alt="me" />
          </div>
      
      </section>

      
 </div>
    </AnimatedPage>
  )
}