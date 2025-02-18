import React, { useEffect } from "react";
import Modal from "../Modal/Modal";
import { IoClose } from "react-icons/io5";
import "./Backdrop.css";

const Backdrop = ({ method }) => {
  useEffect(() => {
    const openButton = document.querySelector(".header__button");
    if (openButton) {
      openButton.addEventListener("click", openModal);
    }
    return () => {
      if (openButton) {
        openButton.removeEventListener("click", openModal);
      }
    };
  }, []);

  const openModal = (event) => {
    event.preventDefault(); 
    document.querySelector(".register__backdrop").style.display = "block";
  };

  const handleClose = () => {
    document.querySelector(".register__backdrop").style.display = "none";
  };

  return (
    <div className="register__backdrop">
      <div className="modal__content">
        <button className="close__button" onClick={handleClose}>
          <IoClose/>
        </button>
        <Modal method={method} />
      </div>
    </div>
  );
};

export default Backdrop;
