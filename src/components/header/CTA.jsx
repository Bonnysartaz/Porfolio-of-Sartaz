import React from 'react';
import CV from '../../assets/Sk Sartaz Ahmed.pdf';
import {BsDownload } from 'react-icons/bs';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">

      Résumé
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
