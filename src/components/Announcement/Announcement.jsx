import { useSelector } from "react-redux";
import "./Announcement.css";

const Announcement = () => {
  const services = useSelector((state) => state.servicesReducer.services);

  return (
    <section className="announcement">
      <div className="container">
        <h2 className="announcement__title-section">Останні оголошення</h2>

        <ul className="announcement__list">
          {services && services.length > 0 ? (
            services.map((service, index) => (
              <li className="announcement__item" key={index}>
                {service.image && (
                  <img
                    className="announcement__image"
                    src={service.image}
                    alt={service.name || "Service"}
                  />
                )}
                <h4 className="announcement__title">{service.name}</h4>
              </li>
            ))
          ) : (
            <li>Немає сервісів для відображення</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Announcement;
