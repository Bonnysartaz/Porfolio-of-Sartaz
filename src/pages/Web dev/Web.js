import AnimatedPage from "../../components/animation/AnimatedPage";
import Topbar from '../../components/topbar/Topbar';
import { BsGlobe2 } from 'react-icons/bs';
import SEO from '../../assets/SEO.PNG';
import SOLO from '../../assets/solo.PNG';
import GRASS from '../../assets/grass.jpg';

import './web.css';


export default function Web() {
  return (
    <AnimatedPage>
      <Topbar/>
    <div className="about">
      <h2 className="title">Web Development</h2>
      
     



      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://learndigital.withgoogle.com/digitalunlocked" target="_blank" rel="noreferrer">
              <BsGlobe2/>
            </a>
            
          </div>
          <h5 className='client__name'>Search Engine Optimization</h5>
          <small className="client__review">Digital Unlocked is an initiative by Google in collaboration with the Indian School of Business and Ministry of Electronics and Information Technology to promote digital awareness and to help small scale businesses and startups to go digital in India.</small>
        </div>
        <div className="image">
            <img src={SEO} alt="me" />
          </div>
      
      </section>


      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://www.sololearn.com/?v=2" target="_blank" rel="noreferrer">
            <BsGlobe2/>
            </a>
            
          </div>
          <h5 className='client__name'>JavaScript (Sololearn)</h5>
          <small className="client__review">Sololearn is an online platform with over 25 online courses focusing on popular programming languages such as Python, C++, Java, C#, JavaScript, and SQL.</small>
        </div>
        <div className="image">
            <img src={SOLO} alt="me" />
          </div>
      
      </section>


      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://grasshopper.app/" target="_blank" rel="noreferrer">
            <BsGlobe2/>
            </a>
            
          </div>
          <h5 className='client__name'>JavaScript (Grasshopper)</h5>
          <small className="client__review">Grasshopper is an app developed by Google that teaches users to code with JavaScript.</small>
        </div>
        <div className="image">
            <img src={GRASS} alt="me" />
          </div>
      
      </section>




      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://three-js-mse-t-shirt.vercel.app" target="_blank" rel="noreferrer">
            <BsGlobe2/>
            </a>

          </div>

          <h6 className='client__name'>Visit site</h6>
          <h5 className='client__name'>Project T-shirt Customizer</h5>
          <small className="client__review">I developed this T-shirt cutomizer. Which is a single page application. I have used React and ThreeJS. (You can interact with it here or visit the site) </small>
        </div>
        <div className="image">

        <div className="iframeContainer2">
        <iframe src="https://three-js-mse-t-shirt.vercel.app" className="iframeContent1" title="Iframe Example"></iframe>
        </div>
         
          </div>

      
      </section>




      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://chatapp-29fb9.firebaseapp.com" target="_blank" rel="noreferrer">
            <BsGlobe2/>
            </a>
            
          </div>
          <h6 className='client__name'>Visit site</h6>
          <h5 className='client__name'>Project Chatroom</h5>
          <small className="client__review">I developed this chatroom. Which is a single page application. I have use Vue in the frontend and Firebase as a backend. (You can interact with it here or visit the site) </small>
        </div>
        <div className="image">

        <div className="iframeContainer1">
        <iframe src="https://chatapp-29fb9.firebaseapp.com" className="iframeContent1" title="Iframe Example"></iframe>
        </div>
         
          </div>

      
      </section>

      
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="hhttps://diary-edb52.firebaseapp.com/login" target="_blank" rel="noreferrer">
            <BsGlobe2/>
            </a>
            
          </div>
          <h6 className='client__name'>Visit site</h6>
          <h5 className='client__name'>Project MSE Diary</h5>
          <small className="client__review">I developed this Diary . Which is a single page application for my classmates. I have use Vue in the frontend and Firebase as a backend (You can interact with it here or visit the site)</small>
        </div>
        <div className="image">

        <div className="iframeContainer2">
        <iframe src="https://diary-edb52.firebaseapp.com/login" className="iframeContent2" title="Iframe Example"></iframe>
        </div>
        
          </div>
      
      </section>

      
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://sartaz-ecb12.firebaseapp.com" target="_blank" rel="noreferrer">
            <BsGlobe2/>
            </a>
            
          </div>
          <h6 className='client__name'>Visit site</h6>
          <h5 className='client__name'>Project Portfolio</h5>
          <small className="client__review">I developed my porfolio back in 2020. Which is a static site. I have use vanila JavaScript, HTML, CSS. (You can interact with it here or visit the site) </small>
        </div>
        <div className="image">
 
        <div className="iframeContainer1">
        <iframe src="https://sartaz-ecb12.firebaseapp.com" className="iframeContent2" title="Iframe Example"></iframe>
        </div>

          </div>
      
      </section>


    </div>
    </AnimatedPage>
  )
}