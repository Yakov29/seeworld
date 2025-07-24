import React from "react";
import "./Hero.css";
import Container from "../Container/Container";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <h1 className="hero__title">Знайди своє місце</h1>
        <span className="hero__description">Подорожуй зі смаком</span>
        <div className="hero__buttons">
          <button className="hero__button">Знайти оголошення</button>
          <button className="hero__button newButton" id="login">Подати оголошення</button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
