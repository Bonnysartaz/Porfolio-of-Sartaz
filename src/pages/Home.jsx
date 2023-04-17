import React from 'react';
import Contact from '../components/contact/Contact';
import Experience from '../components/experience/Experience';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';
import Portfolio from '../components/portfolio/Portfolio';
import Testimonials from '../components/testimonials/Testimonials';

import Modal from '../components/Modal/Modal';


const Home = () => {
  return (

    <>
      <Header />
     
      <Intro />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Modal />
      <Footer />
 
    </>

  )
}

export default Home
