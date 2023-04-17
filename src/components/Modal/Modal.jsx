import React, { useState } from "react";
import { MdCall } from 'react-icons/md';
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
      <MdCall />
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello </h2>
            <p>
            If you can't reach me via email or it's urgent you can call me.
            My number : +88 01955791306 (whatsapp) and +88 01701032647
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE <b> X </b> 
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}