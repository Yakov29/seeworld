import React from "react";
import "./Footer.css";
import Container from "../Container/Container";

import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <img className="footer__logo" src={logo} alt="Logo" />
        <div className="footer__box">
          <ul className="footer__list">
            <li className="footer__item" key={0}>
              <Link className="footer__link" to="/">
                Головна
              </Link>
            </li>
            <li className="footer__item" key={1}>
              <Link className="footer__link" to="/announcements">
                Всі оголошення
              </Link>
            </li>
            <li className="footer__item" key={3}>
              <Link className="footer__link" to="/cabinet">
                Особистий кабінет
              </Link>
            </li>
          </ul>
          <ul className="footer__icons">
            <li className="footer__icon">
              <a href="https://www.facebook.com/" className="footer__icon-link"> <FaFacebook /></a>

            </li>
            <li className="footer__icon">
              <a href="https://www.youtube.com/" className="footer__icon-link"> <FaYoutube /></a>

            </li>
            <li className="footer__icon">
              <a href="https://www.instagram.com/d.yakov29/" className="footer__icon-link"><FaInstagram /></a>

            </li>
            <li className="footer__icon">
              <a href="https://x.com/" className="footer__icon-link"> <FaXTwitter /></a>

            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
