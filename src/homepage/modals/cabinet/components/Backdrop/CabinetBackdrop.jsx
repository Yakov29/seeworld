import React from "react";
import Modal from "../Modal/CabinetModal";
import { IoClose } from "react-icons/io5";
import "./CabinetBackdrop.css";

const CabinetBackdrop = ({ method }) => {
  const handleClose = () => {
    document.querySelector(".cabinet__backdrop").style.display = "none";
  };
  const openModal = (event) => {
    event.preventDefault();

    document.querySelector(".cabinet__backdrop").style.display = "block";
  };

  const openButton = document.querySelector("#cabinet");
  if (openButton) {
    openButton.addEventListener("click", openModal);
  }

  return (
    <div className="cabinet__backdrop">
      <div className="modal__content">
        <button className="close__button" onClick={handleClose}>
          <IoClose />
        </button>
        {/* <ul className="cabinet__chose">
          <li className="cabinet__chose__item">
            <a href="#" className="cabinet__link">Особисті дані</a>
          </li>
          <li className="cabinet__chose__item">
            <a href="#" className="cabinet__link">Мої оголошення</a>
          </li>
          <li href="#" className="cabinet__chose__item">
            <a className="cabinet__link">Обране</a>
          </li>
          <li href="#" className="cabinet__chose__item">
            <a className="cabinet__link">Платіжні дані</a>
          </li>
          <li href="#" className="cabinet__chose__item">
            <a className="cabinet__link">Безпека</a>
          </li>
        </ul> */}
        <Modal method={method} />
      </div>
    </div>
  );
};

export default CabinetBackdrop;
