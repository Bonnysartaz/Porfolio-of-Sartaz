import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/iftekhar-anam',
      name: 'Iftekhar Anam',
      test: 'I am the Co Founder & Team Lead at Team Annexe RUET. Sartaz was a mechanical crew member in the Formula Student competition. Your outstanding mechanical skills and ability to work effectively within the team, coupled with your dedication, attention to detail, and excellent communication skills, were essential to the success of the project. Your positive attitude and strong work ethic made you an invaluable member of the team, and I have no doubt that you will continue to achieve great things in your future endeavors',
    },
   
    {
      id: 2,
      link: 'https://www.instagram.com/maroon_stains/',
      name: 'Sadia Afrin Oyshi',
      test: 'I watched him very closely for years and I do know how passionate he is about his work.  He is all invested while  doing things he loves which always brings the best outcome. He is very much commited to his works and always tries to get things done within time which surely is one of the best things about him. He designed my business logo which helped a lot to grow my small business and I wouldn’t think twice before recommending him to anyone.',
    },

    {
      id: 3,
      link: 'https://www.linkedin.com/in/jessia-alam-b443b617b',
      name: 'Jessia Alam',
      test: "It was a pleasure collaborating with Sartaz in our research on advanced paving materials. Your outstanding research skills and tireless work ethic were truly remarkable, and your attention to detail was a significant asset to our project. Your expertise in the field and commitment to staying up-to-date with the latest research were invaluable. It was a pleasure working with you.",
    },

  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials