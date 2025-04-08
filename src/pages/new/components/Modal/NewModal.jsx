import React from "react";
import "./Modal.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { postAnnouncementAPI } from "../../../../api/postAnnouncementAPI";

const NewModal =  () => {
  const send = async (event) => {
    event.preventDefault();
    const data = {
      country: event.target.elements.country.value,
      city: event.target.elements.city.value,
      address: event.target.elements.address.value,
      type: Array.from(event.target.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.name),
      description: event.target.elements.description.value,
      photos: event.target.elements.photos.value,
      email: event.target.elements.email.value,
    };

    postAnnouncementAPI(data)
    alert("Ваше оголошення успішно надіслано!")
    window.location.reload();
   
  };
  return (
    <form onSubmit={send} className="new__modal">
      <h2 className="new__title">Створити оголошення</h2>
      <ul className="new__list">
        <li className="new__item">
          <h4 className="new__text">Ваша країна</h4>
          <input
            className="new__input"
            id="country"
            name="country"
            type="text"
            placeholder="Введіть назву країни"
          />
        </li>
        <li className="new__item">
          <h4 className="new__text">Вкажіть населений пункт</h4>
          <input
            className="new__input"
            id="city"
            name="city"
            type="text"
            placeholder="Населений пункт "
          />
        </li>
        <li className="new__item">
          <h4 className="new__text">Вулиця, район міста</h4>
          <input
            className="new__input"
            id="address"
            name="address"
            type="text"
            placeholder="Наприклад, вул. Олімпійська, Південний район"
          />
        </li>
        <li className="new__item">
          <h4 className="new__text">Вкажіть тип приміщення</h4>
          <ul className="new__item__select">
            <li className="new__item__select__item">
              <input
                className="new__item__select__checkbox"
                name="apartment"
                type="checkbox"
              />
              <span className="new__item__select__span">Квартира</span>
            </li>
            <li className="new__item__select__item">
              <input
                className="new__item__select__checkbox"
                name="house"
                type="checkbox"
              />
              <span className="new__item__select__span">Будинок</span>
            </li>
            <li className="new__item__select__item">
              <input
                className="new__item__select__checkbox"
                name="room"
                type="checkbox"
              />
              <span className="new__item__select__span">Кімната</span>
            </li>
            <li className="new__item__select__item">
              <input
                className="new__item__select__checkbox"
                name="studio"
                type="checkbox"
              />
              <span className="new__item__select__span">Студія</span>
            </li>
          </ul>
        </li>
        <li className="new__item">
          <h4 className="new__text">
            Вкажіть основні відомості про своє житло
          </h4>
          <ul className="new__item__data">
            <li className="new__item__data__item">
              <h5 className="new__item__data__title">Гості</h5>
              <div className="new__item__data__box">
                <button
                  type="button"
                  id="button-left"
                  className="new__item__data__button"
                >
                  <FaRegArrowAltCircleLeft />
                </button>
                <p className="new__item__data__number">1</p>
                <button
                  type="button"
                  id="button-right"
                  className="new__item__data__button"
                >
                  <FaRegArrowAltCircleRight />
                </button>
              </div>
            </li>
            <li className="new__item__data__item">
              <h5 className="new__item__data__title">Спальні</h5>
              <div className="new__item__data__box">
                <button
                  type="button"
                  id="button-left"
                  className="new__item__data__button"
                >
                  <FaRegArrowAltCircleLeft />
                </button>
                <p className="new__item__data__number">1</p>
                <button
                  type="button"
                  id="button-right"
                  className="new__item__data__button"
                >
                  <FaRegArrowAltCircleRight />
                </button>
              </div>
            </li>
            <li className="new__item__data__item">
              <h5 className="new__item__data__title">Ліжка</h5>
              <div className="new__item__data__box">
                <button
                  type="button"
                  id="button-left"
                  className="new__item__data__button"
                >
                  <FaRegArrowAltCircleLeft />
                </button>
                <p className="new__item__data__number">1</p>
                <button
                  type="button"
                  id="button-right"
                  className="new__item__data__button"
                >
                  <FaRegArrowAltCircleRight />
                </button>
              </div>
            </li>
            <li className="new__item__data__item">
              <h5 className="new__item__data__title">Ванні кімнати</h5>
              <div className="new__item__data__box">
                <button
                  type="button"
                  id="button-left"
                  className="new__item__data__button"
                >
                  <FaRegArrowAltCircleLeft />
                </button>
                <p className="new__item__data__number">1</p>
                <button
                  type="button"
                  id="button-right"
                  className="new__item__data__button"
                >
                  <FaRegArrowAltCircleRight />
                </button>
              </div>
            </li>
          </ul>
        </li>
        <li className="new__item">
          <h4 className="new__text">Запишіть особливості вашого приміщення</h4>
          <textarea
            className="new__textarea"
            id="description"
            name="description"
            placeholder="Опишіть ваше житло"
          ></textarea>
        </li>
        <li className="new__item">
          <h4 className="new__text">Завантажте фото</h4>
          <p className="new__description">
            Щоб розпочати, потрібно зробити 5 фотографій. Згодом можна додати
            більше фото або внести необхідні зміни.
          </p>
          <input
            className="new__input photo__input"
            id="photos"
            name="photos"
          />
        </li>
        <li className="new__item">
          <h4 className="new__text">Вкажіть ваш емейл для підтвердження</h4>
          <input
            className="new__input"
            id="email"
            name="email"
            type="email"
            placeholder="Введіть email"
          />
          <button className="new__send" type="submit">
            Підтвердити
          </button>
        </li>
      </ul>
    </form>
  );
};

export default NewModal;
