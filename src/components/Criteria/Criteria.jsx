import "./Criteria.css";
import Container from "../Container/Container";
import {criteria} from "../../data/criteria";

const Criteria = () => {
  return (
    <section className="criteria">
      <Container>
        <h2 className="criteria__title">Критерії оголошення</h2>
        <ul className="criteria__list">
          {criteria.map((item) => {
            return (
              <li className="criteria__item" key={item.id}>
                <img
                  className="criteria__image"
                  src={item.image}
                  alt={item.name}
                />
                <p className="criteria__description">{item.name}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Criteria;
