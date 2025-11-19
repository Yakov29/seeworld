import { useState } from "react";
import "./header.css";
import logo from "../../logo.svg";
import Container from "../Container/Container";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <Container>
        <img className="header__logo" src={logo} alt="Logo" />
        <ul className="header__list">
          <li className="header__item">
            <Link to="/" className="header__link">Головна</Link>
          </li>
          <li className="header__item">
            <Link to="/announcements" className="header__link">Всі оголошення</Link>
          </li>
          <li className="header__item addannouncement">
            <Link to="/create" className="header__link">Додати оголошення</Link>
          </li>
          <li className="header__item heart">
            <Link to="/favorites" className="header__link"><FaRegHeart /></Link>
          </li>
        </ul>
        {!profile && (
          <Link className="header__button" to="/register">Зареєструватись</Link>
        )}
        {profile && (
          <Link className="header__button" to="/cabinet">Особистий кабінет</Link>
        )}
        <button className="header__burger" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className={`mobile-overlay ${isOpen ? "show" : ""}`} onClick={closeMenu}></div>
        <nav className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <ul className="mobile-menu__list">
            <li><Link to="/" onClick={closeMenu}>Головна</Link></li>
            <li><Link to="/announcements" onClick={closeMenu}>Всі оголошення</Link></li>
            <li><Link to="/create" onClick={closeMenu}>Додати оголошення</Link></li>
            <li><Link to="/favorites" onClick={closeMenu}>Обране</Link></li>
            {!profile && (
              <li><Link to="/register" onClick={closeMenu}>Зареєструватись</Link></li>
            )}
            {profile && (
              <li><Link to="/cabinet" onClick={closeMenu}>Особистий кабінет</Link></li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;