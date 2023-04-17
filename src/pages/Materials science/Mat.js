
import AnimatedPage from "../../components/animation/AnimatedPage";
import Topbar from '../../components/topbar/Topbar';
import { BsGlobe2 } from 'react-icons/bs';
import { BsDownload } from 'react-icons/bs';
import ME from '../../assets/cer3.jpeg';
import SSRM from '../../assets/SSRM.jpeg';
import CASE from '../../assets/case.PNG';
import './mat.css';


export default function Mat() {
  return (
    <AnimatedPage>
      <Topbar/>
    <div className="about">
      <h2 className="title">Academic</h2>
      



      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://www.ssrm.com.bd" target="_blank" rel="noreferrer">
              <BsGlobe2/>
            </a>
            
          </div>
          <h5 className='client__name'>Internship at SSRM</h5>
          <small className="client__review">Shahriar Steel Mills Ltd. fully automatic Integrated ECO-friendly steel plant equipped with state of the art technology and machineries installed to manufacture high strength TMT (thermo mechanically treated) Bar, 400/60 graded Re-Bar and also square Bar, Angles, Channels.</small>
        </div>
        <div className="image">
            <img src={SSRM} alt="me" />
          </div>
      
      </section>


      
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="http://www.bteb.gov.bd" target="_blank" rel="noreferrer">
            <BsGlobe2/>
            </a>
            
          </div>
          <h5 className='client__name'>Servey Course</h5>
          <small className="client__review">Bangladesh Technical Education Board is a state regulatory board responsible for monitoring and developing technical and vocational education</small>
        </div>
        <div className="image">
            <img src={ME} alt="me" />
          </div>
      
      </section>

      
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://github.com/Bonnysartaz/Pdfs/raw/main/group%2014%20(1713022%2C%201713033)%20final.pdf" target="_blank" rel="noreferrer">
            <BsDownload/>
            </a>
            
          </div>
          <h5 className='client__name'>Research</h5>
          <small className="client__review">I have done research in epoxy ashphalt composite for pavement purposes. I am willing to publsh a research paper on this topic</small>
        </div>
        <div className="image">
            <img src={CASE} alt="me" />
          </div>
      
      </section>

      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://www.mse.ruet.ac.bd" target="_blank" rel="noreferrer">
            <BsGlobe2/>
            </a>
            
          </div>
          <h5 className='client__name'>Undergraduate Courses</h5>
          <small className="client__review">My subject is comparatively new in our country, so to to get a breif idea you can view the courses. These are courses in undergraduate 
Programme (Materials Science and Engineering). If you can't see the preview of the PDF file, download it</small>
       
<a href="https://github.com/Bonnysartaz/Pdfs/raw/main/Courses.pdf" target="_blank" rel="noreferrer">
      <BsDownload/>
            </a>

        </div>


      </section>

      
      
    <center>      
      <iframe src="https://coffee-kimberly-25.tiiny.site/" title="pf" width="700" height="500">
      </iframe>
      </center>

      



    </div>
    </AnimatedPage>
  )
}