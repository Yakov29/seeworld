import { useEffect, useState } from "react";
import Container from "../Container/Container";
import "./FavoritesList.css";

const FavoritesList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (favorites.length === 0) {
        setAnnouncements([]);
        setLoading(false);
        return;
      }
      try {
        const uniqueFavorites = [...new Set(favorites.map(f => f.announcementId))];
        const promises = uniqueFavorites.map(id =>
          fetch(`https://6882916c21fa24876a9b3c72.mockapi.io/announcement/${id}`)
            .then(res => res.json())
        );
        const results = await Promise.all(promises);
        setAnnouncements(results);
      } catch (error) {
        // Handle error appropriately, e.g., display a message to the user
      } finally {
        setLoading(false);
      }
    };
    fetchAnnouncements();
  }, []);

  const removeFromFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updated = favorites.filter(f => f.announcementId !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setAnnouncements(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section className="favorites">
      <Container>
        {loading ? (
          <p className="favorites__loading">Завантаження...</p>
        ) : announcements.length === 0 ? (
          <p className="favorites__empty">У вас поки немає об'яв у вибраному.</p>
        ) : (
          <ul className="favorites__list">
            {announcements.map(item => (
              <li key={item.id} className="favorites__item">
                <img
                  className="favorites__image"
                  src={item.image || "https://via.placeholder.com/300x200?text=No+Image"}
                  alt={`Зображення для оголошення в ${item.country}, ${item.city}`}
                />
                <div className="favorites__info">
                  <div className="favorites__info-item">
                    {item.country}, {item.city}, {item.street}
                  </div>
                  <div className="favorites__info-item">Тип: {item.type}</div>
                </div>
                <button
                  className="favorites__remove"
                  onClick={() => removeFromFavorites(item.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default FavoritesList;