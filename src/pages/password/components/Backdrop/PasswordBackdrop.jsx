import React from "react";
import Modal from "../Modal/PasswordModal";
import { IoClose } from "react-icons/io5";
import "./PasswordBackdrop.css";

const PasswordBackdrop = ({ method }) => {
  const openButton = document.querySelector
  const handleClose = () => {
    document.querySelector(".password__backdrop").style.display = "none";
  
  };
  const openModal = (event) => {
    event.preventDefault(); 
    document.querySelector(".password__backdrop").style.display = "block";
  };

  



  return (
    <div className="password__backdrop">
      <div className="modal__content">
        <button className="close__button" onClick={handleClose}><IoClose/></button>
        <Modal method={method} />
      </div>
    </div>
  );
};

export default PasswordBackdrop;
