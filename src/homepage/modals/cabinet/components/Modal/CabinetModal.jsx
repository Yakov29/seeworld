import React, { useState, useEffect } from "react";
import "./CabinetModal.css";
import { getProfileAPI } from "../../../../../api/getProfileAPI";

const CabinetModal = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfileAPI().then((data) => {
      setProfile(data);
    });
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profile || !profile.id) return;

    await fetch(
      `https://67c950b40acf98d07089b4a2.mockapi.io/users/${profile.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      }
    );
    localStorage.setItem("user", JSON.stringify(profile));
    document.querySelector(".cabinet__backdrop").style.display = "none";
  window.location.reload()
  };

  if (!profile) return <div>Зареєструйтесь або увійдіть...</div>;

  return (
    <form onSubmit={handleSubmit} className="cabinet__modal">
      <h2 className="cabinet__title">Особистий кабінет</h2>
      <span className="cabinet__description">
        Оновіть свою інформацію та дізнайтеся, як вона використовується.
      </span>
      <ul className="cabinet__inputs">
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Ваше ім’я</span>
          <input
            className="cabinet__input"
            name="name"
            type="text"
            value={profile.name || ""}
            onChange={handleChange}
          />
        </li>
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Ваше прізвище</span>
          <input
            className="cabinet__input"
            name="surname"
            type="text"
            value={profile.surname || ""}
            onChange={handleChange}
          />
        </li>
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Email</span>
          <input
            className="cabinet__input"
            name="email"
            type="email"
            value={profile.email || ""}
            onChange={handleChange}
          />
        </li>
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Номер телефону</span>
          <input
            className="cabinet__input"
            name="tel"
            type="tel"
            value={profile.tel || ""}
            onChange={handleChange}
          />
        </li>
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Дата народження</span>
          <input
            className="cabinet__input"
            name="date"
            type="date"
            value={profile.age || ""}
            onChange={handleChange}
          />
        </li>
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Стать</span>
          <select
            className="cabinet__input"
            name="gender"
            value={profile.gender || ""}
            onChange={handleChange}
          >
            <option value="">Оберіть стать</option>
            <option value="Жіноча">Жіноча</option>
            <option value="Чоловіча">Чоловіча</option>
            <option value="Немає">Немає</option>
          </select>
        </li>
        <li className="cabinet__inputs__item">
          <span className="cabinet__inputs__span">Ваша країна</span>
          <input
            className="cabinet__input"
            name="country"
            type="search"
            value={profile.country || ""}
            onChange={handleChange}
          />
        </li>
      </ul>
      <button className="cabinet__submit" type="submit">
        Змінити
      </button>
    </form>
  );
};

export default CabinetModal;
