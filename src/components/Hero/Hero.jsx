import "./Hero.css";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <h1 className="hero__title">Знайди своє місце</h1>
        <span className="hero__description">Подорожуй зі смаком</span>
        <div className="hero__buttons">
          <Link to="/announcements"><button className="hero__button">Знайти оголошення</button></Link>
          <Link to="/create"><button className="hero__button newButton" id="login">Подати оголошення</button></Link>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
