import React from "react";
import "./header.css";
import logo from "../../logo.svg";
import Container from "../components/Container/Container";

const Header = () => {
 
  return (
    <header className="header">
      <Container>
        <img src={logo} alt="Logo" />
        <ul className="header__list">
          <li className="header__item">
            <a href="#" className="header__link">
              Головна
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              Всі оголошення
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              ❤️
            </a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">
              <img src="./images/user.svg" alt="" />
            </a>
          </li>
          <li className="header__item">
            <a href="#" id="cabinet" className="header__link">
              Особистий кабінет
            </a>
          </li>
        </ul>
        <a className="header__button" href="">Зареєструватись</a>
      </Container>
    </header>
  );
};

export default Header;
