import React from "react";
import "./header.css";
import logo from "../../logo.svg";
import Container from "../Container/Container";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ profile }) => {
  return (
    <header className="header">
      <Container>
        <img src={logo} alt="Logo" />

        <ul className="header__list">
          <li className="header__item">
            <Link to="/" className="header__link">
              Головна
            </Link>
          </li>
          <li className="header__item">
            <Link to="/announcements" className="header__link">
              Всі оголошення
            </Link>
          </li>
          <li className="header__item addannouncement">
            <Link to="/create" className="header__link">
              Додати оголошення
            </Link>
          </li>
          <li className="header__item">
            <Link to="/favorites" className="header__link">
              <FaRegHeart />
            </Link>
          </li>
          <li className="header__item">
            <Link to="" className="header__link">
              <img src="./images/user.svg" alt="" />
            </Link>
          </li>
          <li className="header__item">
            <Link to="/cabinet" id="cabinet" className="header__link">
              Особистий кабінет
            </Link>
          </li>

          {!profile && (
            <li className="header__item">
              <Link className="header__button" to="/register">
                Зареєструватись
              </Link>
            </li>
          )}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
