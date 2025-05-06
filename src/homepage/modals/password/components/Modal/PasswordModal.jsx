import React from "react";
import "./PasswordModal.css"

const Modal = ({method}) => {
  return (
    <form onSubmit={method} className="password__modal">
      <h2 className="password__title">Відновлення паролю</h2>
      <span className="password__description">
      Введіть email на який ви проходили
      реєстрацію, ми відправимо інструкції
      </span>
      <ul className="password__inputs">
        <li className="password__inpus__item">
            <input className="password__input" id="name" name="email" type="email" placeholder="Email*" />
        </li>
        
      </ul>
      <button type="submit">Відправити</button>
    </form>
  );
};

export default Modal;
