import { useEffect, useState } from "react";
import Container from "../Container/Container";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import "./SuperEco.css";
import { useSelector, useDispatch } from "react-redux";
import { getAnnouncement } from "../../redux/thunks/thunk";

import { useFilterState } from "../../redux/selector";
import { memoizedFilterAnnouncements } from "../../redux/selector";

const SuperEco = ({ favorite, profile }) => {
  const [favoritesIds, setFavoritesIds] = useState([]);
  const dispatch = useDispatch();

  const announcements = useSelector(
    (state) => state.announcementReducer.announcements
  );
useFilterState()
memoizedFilterAnnouncements()
  useEffect(() => {
    dispatch(getAnnouncement());
    
  }, [dispatch]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const ids = storedFavorites.map((f) => f.announcementId);
    setFavoritesIds(ids);
  }, []);

  const handleFavorite = (e, id) => {
    favorite(e, id);
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
              {profile && (
                <button
                  onClick={(e) => handleFavorite(e, element.id)}
                  className="supereco__favorite"
                >
                  {favoritesIds.includes(element.id) ? (
                    <FaHeart color="#266294" />
                  ) : (
                    <FaRegHeart color="#266294" />
                  )}
                </button>
              )}
              <p className="supereco__id">ID: {element.id}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default SuperEco;