import React from "react";
import "./Criteria.css";
import Container from "../Container/Container";
import {criteria} from "../../data/criteria";

const Criteria = () => {
  return (
    <section className="criteria">
      <Container>
        <h2 className="criteria__title">Критерії оголошення</h2>
        <ul className="criteria__list">
          {criteria.map((criteria) => {
            return (
              <li className="criteria__item">
                <img
                  className="criteria__image"
                  src={criteria.image}
                />
                <p className="criteria__description">{criteria.name}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Criteria;
