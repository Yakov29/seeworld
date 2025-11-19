import "./CreateForm.css";
import Container from "../Container/Container";
import { useDispatch } from "react-redux";
import { addAnnouncement } from "../../redux/thunks/thunk";
import { useState, useEffect } from "react";

const CreateForm = () => {
  const dispatch = useDispatch();
  const initialFormData = {
    country: "",
    city: "",
    street: "",
    type: "",
    guests: 1,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    description: "",
    image: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [selectedTypeLocal, setSelectedTypeLocal] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user && user.email) {
      setFormData((prev) => ({ ...prev, email: user.email }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectType = (e) => {
    const type = e.target.textContent;
    setSelectedTypeLocal(type);
    setFormData((prev) => ({ ...prev, type: type }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAnnouncement(formData));
    setFormData(initialFormData);
    setSelectedTypeLocal("");
  };

  if (!user) {
    return (
      <section className="createform">
        <p className="createform__notreg">
          Щоб створити оголошення, зареєструйтесь або увійдіть!
        </p>
      </section>
    );
  } else {
    return (
      <section className="createform">
        <Container>
          <h2 className="createform__title">Створити оголошення</h2>
          <form className="createform__form" onSubmit={handleSubmit}>
            <ul className="createform__list">
              <li className="createform__item">
                <h4 className="createform__text">Ваша країна</h4>
                <input
                  type="text"
                  className="createform__input"
                  name="country"
                  placeholder="Введіть назву країни"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </li>
              <li className="createform__item">
                <h4 className="createform__text">Вкажіть населений пункт</h4>
                <input
                  type="text"
                  className="createform__input"
                  name="city"
                  placeholder="Населений пункт "
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </li>
              <li className="createform__item">
                <h4 className="createform__text">Вулиця, район міста</h4>
                <input
                  type="text"
                  className="createform__input"
                  name="street"
                  placeholder="Наприклад, вул. Олімпійська, Південний район"
                  value={formData.street}
                  onChange={handleChange}
                  required
                />
              </li>
              <li className="createform__item">
                <h4 className="createform__text">Вкажіть тип приміщення</h4>
                <div className="createform__buttons">
                  {["Будинок", "Квартира", "Кімната", "Студія"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={handleSelectType}
                      className={`createform__button ${
                        selectedTypeLocal === type ? "active" : ""
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </li>
              <li className="createform__item">
                <h4 className="createform__text">
                  Вкажіть основні відомості про своє житло
                </h4>
                <ul className="createform__more">
                  <li className="createform__more-item">
                    <span className="createform__more-span">Гості</span>
                    <input
                      type="number"
                      name="guests"
                      placeholder="1"
                      className="createform__more-input"
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      required
                    />
                  </li>
                  <li className="createform__more-item">
                    <span className="createform__more-span">Спальні</span>
                    <input
                      type="number"
                      name="bedrooms"
                      placeholder="1"
                      className="createform__more-input"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      min="1"
                      required
                    />
                  </li>
                  <li className="createform__more-item">
                    <span className="createform__more-span">Ліжка</span>
                    <input
                      type="number"
                      name="beds"
                      placeholder="1"
                      className="createform__more-input"
                      value={formData.beds}
                      onChange={handleChange}
                      min="1"
                      required
                    />
                  </li>
                  <li className="createform__more-item">
                    <span className="createform__more-span">Ванні кімнати</span>
                    <input
                      type="number"
                      name="bathrooms"
                      placeholder="1"
                      className="createform__more-input"
                      value={formData.bathrooms}
                      onChange={handleChange}
                      min="1"
                      required
                    />
                  </li>
                </ul>
              </li>
              <li className="createform__item">
                <h4 className="createform__text">
                  Запишіть особливості вашого приміщення{" "}
                </h4>
                <textarea
                  name="description"
                  className="createform__textarea"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </li>
              <li className="createform__item">
                <h4 className="createform__text">Завантажте фото</h4>
                <p className="createform__image-text">
                  Щоб розпочати, потрібно зробити 5 фотографій. Згодом можна
                  додати більше фото або внести необхідні зміни.
                </p>
                <input
                  type="text"
                  className="createform__input"
                  name="image"
                  placeholder="Посилання на фото"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </li>
              <li className="createform__item">
                <h4 className="createform__text">
                  Вкажіть ваш емейл для підтвердження
                </h4>
                <input
                  type="email"
                  className="createform__input"
                  name="email"
                  placeholder="Введіть email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  readOnly={!!user}
                />
              </li>
              <button type="submit" className="createform__send">
                Підтвердити
              </button>
            </ul>
          </form>
        </Container>
      </section>
    );
  }
};

export default CreateForm;