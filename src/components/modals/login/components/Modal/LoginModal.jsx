import React from "react";
import "./LoginModal.css";


const LoginModal = ({ method }) => {
  return (
    <form onSubmit={method} className="login__modal">
      <h2 className="login__title">Увійти</h2>
      <span className="login__description">
        Увійдіть, щоб отримати можливість запропонувати своє житло
      </span>
      <ul className="login__select">
        <li className="login__select__item">
          <input className="login__select__checkbox" type="checkbox" />
          <span className="logib__select__span">Email</span>
        </li>
        <li className="login__select__item">
          <input className="login__select__checkbox" type="checkbox" />
          <span className="logib__select__span">Номер телефону</span>
        </li>
      </ul>
      <ul className="login__inputs">
        <li className="login__inputs__item">
          <input
            className="login__input"
            id="email"
            name="email"
            type="email"
            placeholder="Email*"
          />
        </li>
        <li className="login__inputs__item">
          <input
            className="login__input"
            id="password"
            name="password"
            type="password"
            placeholder="Пароль*"
          />
        </li>
      </ul>
      <span className="login__forgot">Забули пароль?</span>
      <button className="login__submit" type="submit">Увійти</button>
      <div className="login__service">
        <h3 className="login__service__title">Або використовуйте</h3>
        <ul className="login__service__list">
          <li className="login__service__item">
            <img className="login__service__image" src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="" />
          </li>
          <li className="login__service__item">
            <img className="login__service__image"src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" />
          </li>
          <li className="login__service__item">
            <img className="login__service__image"src="https://toppng.com/public/uploads/preview/twitter-x-icon-logo-116902890413xbfexhf8l.webp" alt="" />
          </li>
        </ul>
      </div>
      <div className="login__noaccount">
        <h3 className="login__noaccount__title">
        Не маєте акаунту?
        </h3>
        <a href="./index.html" className="login__noaccount__link">Зареєстуйтесь</a>
      </div>
    </form>
  );
};

export default LoginModal;
