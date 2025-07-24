import React from "react";
import "./Modal.css"

const Modal = ({method}) => {
  return (
    <form onSubmit={method} className="register__modal">
      <h2 className="register__title">Зареєстуватися</h2>
      <span className="register__description">
        Зареєструйтесь, щоб отримати можливість забронювати житло
      </span>
      <ul className="register__inputs">
        <li className="register__inpus__item">
            <input className="register__input" id="name" name="name" type="text" placeholder="Ваше ім’я*" />
        </li>
        <li className="register__inpus__item">
            <input className="register__input" id="surname"  name="surname" type="text" placeholder="Прізвище*" />
        </li>
        <li className="register__inpus__item">
            <input className="register__input" id="email"  name="email" type="email" placeholder="Email*" />
        </li>
        <li className="register__inpus__item">
            <input className="register__input" id="tel" name="tel" type="tel" placeholder="Номер телефону*" />
        </li>
        <li className="register__inpus__item">
            <input className="register__input" id="age"  name="age" type="date" placeholder="Ваш вік*" />
        </li>
      </ul>
      <div className="register__password">
        <h4 className="register__password__title">Придумайте пароль</h4>
        <ul className="register__password__list">
            <li className="register__password__item">
                <input type="password" id="password" placeholder="**************" className="register__input" />
            </li>
            <li className="register__password__item">
                <input type="password" id="repeate-password" name="confirm" placeholder="Password111111" className="register__input" />
            </li>
        </ul>
      </div>
      <button className="register__submit" type="submit">Відправити</button>
      <div className="register__link">
        <span className="register__link__title">Вже маєте акаунт?    <button type="button" className="register__link__button">Авторизуйтесь</button></span>
     
      </div>
    </form>
  );
};

export default Modal;
