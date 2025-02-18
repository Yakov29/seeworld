import React from "react";
import "./CabinetModal.css";

const CabinetModal = ({ method }) => {
  return (
    <form onSubmit={method} className="cabinet__modal">
      <h2 className="cabinet__title">Особистий кабінет</h2>
      <span className="cabinet__description">
        Оновіть свою інформацію та дізнайтеся, як вона використовується.{" "}
      </span>
      <ul className="cabinet__inputs">
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Ваше ім’я</span>
          <input
            className="cabinet__input"
            name="name"
            id="cabinet__name"
            type="text"
            placeholder="Джозеф"
          />
        </li>
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Ваше прізвище</span>
          <input
            className="cabinet__input"
            name="surname"
            id="cabinet__surname"
            type="text"
            placeholder="Хофер"
          />
        </li>
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Email</span>
          <input
            className="cabinet__input"
            name="email"
            id="cabinet__email"
            type="email"
            placeholder="Hoferd@gmail.com"
          />
        </li>
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Номер телефону</span>
          <input
            className="cabinet__input"
            name="tel"
            id="cabinet__tel"
            type="tel"
            placeholder="+380933162639"
          />
        </li>
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Дата народження</span>
          <input
            className="cabinet__input"
            name="date"
            id="cabinet__date"
            type="date"
            placeholder="04/06/1967"
          />
        </li>
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Стать</span>
          <input
            className="cabinet__input"
            name="gender"
            id="cabinet__gender"
            type="text"
            placeholder="Чоловік"
          />
        </li>
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Ваша країна</span>
          <input
            className="cabinet__input"
            name="country"
            id="cabinet__name"
            type="search"
            placeholder="Країна/регіон"
          />
        </li>
      </ul>
      <button className="cabinet__submit" type="submit">
        Змінити
      </button>
    </form>
  );
};

export default CabinetModal;
