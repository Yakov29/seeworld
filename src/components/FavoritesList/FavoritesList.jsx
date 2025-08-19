import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import "./FavoritesList.css"

const FavoritesList = ({ favorites }) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      if (!favorites || favorites.length === 0) {
        setAnnouncements([]);
        return;
      }

      try {
        const promises = favorites.map(fav =>
          fetch(`https://6882916c21fa24876a9b3c72.mockapi.io/announcement/${fav.announcementId}`)
            .then(res => res.json())
        );

        const results = await Promise.all(promises);
        setAnnouncements(results);
      } catch (error) {
        console.error("Помилка при отриманні об'яв:", error);
      }
    };

    fetchAnnouncements();
  }, [favorites]);

  return (
   <section className="favorites">
  <Container>
    <ul className="favorites__list">
      {announcements.map(item => (
        <li key={item.id} className="favorites__item">
          <img className="favorites__image" src={item.image || ""} alt={item.description || ""} />
          <div className="favorites__info">
            <div className="favorites__info-item">{item.country}, {item.city}, {item.street}</div>
            <div className="favorites__info-item">Тип: {item.type}</div>
          </div>
        </li>
      ))}
    </ul>
  </Container>
</section>

  );
};

export default FavoritesList;
