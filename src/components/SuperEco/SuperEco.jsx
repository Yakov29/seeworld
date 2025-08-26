import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { getAnnouncementAPI } from "../../api/getAnnouncementAPI";
import "./SuperEco.css";

const SuperEco = ({ favorite }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [favoritesIds, setFavoritesIds] = useState([]);

  useEffect(() => {
    getAnnouncementAPI().then((data) => {
      setAnnouncements(data);
    });

    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const ids = storedFavorites.map((f) => f.announcementId);
    setFavoritesIds(ids);
  }, []);

  const handleFavorite = (e, id) => {
    favorite(e, id);
    // Обновляем локальный state чтобы иконка сразу менялась
    setFavoritesIds((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]
    );
  };

  return (
    <section className="supereco">
      <Container>
        <h2 className="allannouncements__title">Всі оголошення</h2>
        <ul className="supereco__list">
          {announcements.map((element) => (
            <li key={element.id} className="supereco__item">
              <img
                className="supereco__image"
                src={element.image}
                alt={element.country}
              />
              <h4 className="supereco__name">{element.country}</h4>
              <p className="supereco__description">
                {element.city}, {element.street}
              </p>
              <button
                onClick={(e) => handleFavorite(e, element.id)}
                className="supereco__favorite"
              >
                {favoritesIds.includes(element.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
              <p className="supereco__id">ID: {element.id}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default SuperEco;
