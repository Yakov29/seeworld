import { useSelector } from "react-redux";
import "./Announcement.css";
import Container from "../Container/Container";

const Announcement = () => {
  const services = useSelector((state) => state.servicesReducer.services);

  return (
    <section className="announcement">
      <Container>
        <h2 className="announcement__title-section">Останні оголошення</h2>

        <ul className="announcement__list">
          {services && services.length > 0 ? (
            services.map((service) => (
              <li className="announcement__item" key={service.id}>
                {service.image && (
                  <img
                    className="announcement__image"
                    src={service.image}
                    alt={`Image for ${service.name || "Service"}`}
                  />
                )}
                <h4 className="announcement__title">{service.name}</h4>
              </li>
            ))
          ) : (
            <li>Немає сервісів для відображення</li>
          )}
        </ul>
      </Container>
    </section>
  );
};

export default Announcement;