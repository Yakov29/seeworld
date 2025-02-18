import React from "react";
import "./Footer.css";
import Container from "../Container/Container";

import logo from "../../../logo.svg";
import facebook from "../../../images/facebook.svg";
import youtube from "../../../images/youtube.svg";
import instagram from "../../../images/instagram.svg";
import twitter from "../../../images/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <img className="footer__logo" src={logo} alt="Logo" />
        <div className="footer__box">
        <ul className="footer__list">
          <li className="footer__item" key={0}>
            <a className="footer__link" href="#">
              Головна
            </a>
          </li>
          <li className="footer__item" key={1}>
            <a className="footer__link" href="#">
              Всі оголошення
            </a>
          </li>
          <li className="footer__item" key={2}>
            <a className="footer__link" href="#">
              Обране
            </a>
          </li>
          <li className="footer__item" key={3}>
            <a className="footer__link" href="#">
              Особистий кабінет
            </a>
          </li>
        </ul>
        <ul className="footer__icons">
          <li className="footer__icon">
            <img className="footer__icon__link" src={facebook} alt="facebook" />
          </li>
          <li className="footer__icon">
            <img className="footer__icon__link" src={youtube} alt="youtube" />
          </li>
          <li className="footer__icon">
            <img
              className="footer__icon__link"
              src={instagram}
              alt="instagram"
            />
          </li>
          <li className="footer__icon">
            <img className="footer__icon__link" src={twitter} alt="twitter" />
          </li>
        </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
