import React, { useEffect, useState } from "react";
import Modal from "../Modal/LoginModal";
import { IoClose } from "react-icons/io5";
import "./Backdrop.css";

const LoginBackdrop = ({ method }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const openButton = document.querySelector(".register__link__button");
    const registerBackdrop = document.querySelector(".register__backdrop");

    const openModal = (event) => {
      event.preventDefault();
      if (registerBackdrop) {
        registerBackdrop.style.display = "none";
      }
      setIsVisible(true);
    };

    if (openButton) {
      openButton.addEventListener("click", openModal);
    }

    return () => {
      if (openButton) {
        openButton.removeEventListener("click", openModal);
      }
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="login__backdrop" style={{ display: "flex" }}>
      <div className="modal__content">
        <button className="close__button" onClick={handleClose}>
          <IoClose />
        </button>
        <Modal method={method} />
      </div>
    </div>
  );
};

export default LoginBackdrop;
