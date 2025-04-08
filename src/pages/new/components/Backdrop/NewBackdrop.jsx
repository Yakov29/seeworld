import React from "react";
import Modal from "../Modal/NewModal";
import { IoClose } from "react-icons/io5";
import "./Backdrop.css";

const NewBackdrop = ({ method }) => {
  const openButton = document.querySelector
  const handleClose = () => {
    document.querySelector(".new__backdrop").style.display = "none";
  
  };
  const openNewModal = (event) => {
    event.preventDefault(); 
    document.querySelector(".new__backdrop").style.display = "block";
  };

  



  return (
    <div className="new__backdrop">
      <div className="modal__content">
        <button className="close__button" onClick={handleClose}><IoClose/></button>
        <Modal method={method} />
      </div>
    </div>
  );
};

export default NewBackdrop;
