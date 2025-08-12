import React, {useEffect} from "react";
import "./header.css";
import logo from "../../logo.svg";
import Container from "../Container/Container";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {

  useEffect(() => {
    const user = localStorage.getItem("user");
    const headerButton = document.querySelector(".header__button")
    console.log(user)
    if (user !== null) {
      headerButton.style.display = "none"
    }
  }, []);
 
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
          <li className="header__item">
            <Link to="" className="header__link">
              <FaRegHeart/>
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
        </ul>
        <Link className="header__button" to="/register">Зареєструватись</Link>
      </Container>
    </header>
  );
};

export default Header;
