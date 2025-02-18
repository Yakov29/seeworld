import React from "react";
import Modal from "../Modal/LoginModal";
import { IoClose } from "react-icons/io5";
import "./Backdrop.css";

const LoginBackdrop = ({ method }) => {
  const openButton = document.querySelector
  const handleClose = () => {
    document.querySelector(".login__backdrop").style.display = "none";
  
  };
  const openModal = (event) => {
    event.preventDefault(); 
    document.querySelector(".login__backdrop").style.display = "block";
  };

  



  return (
    <div className="login__backdrop">
      <div className="modal__content">
        <button className="close__button" onClick={handleClose}><IoClose/></button>
        <Modal method={method} />
      </div>
    </div>
  );
};

export default LoginBackdrop;
