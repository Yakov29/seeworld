import React, { Component, useEffect, useState } from "react";
import "./Announcement.css";
import { getAnnouncementAPI } from "../../api/getAnnouncementAPI";



const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchAnnouncements();
  }, [])

  const fetchAnnouncements = async () => {
    try {
      const announcements = await getAnnouncementAPI();
      if (Array.isArray(announcements)) {
        setAnnouncements(announcements);
        setLoading(false);
        setError(false);
      } else {
        setAnnouncements([]);
        setLoading(false);
        setError(true);
      }
    } catch (err) {
      setAnnouncements([]);
      setLoading(false);
      setError(true);
      console.error("Помилка при завантаженні оголошень:", err);
    }
  };

  return (
    <section className="announcement">
      <div className="container">
        <h2 className="announcement__title-section">Останні оголошення</h2>
        <ul className="announcement__list">
          {loading ? (
            <li>Завантаження оголошень...</li>
          ) : error ? (
            <li>Помилка при завантаженні оголошень</li>
          ) : announcements.length > 0 ? (
            announcements.map((announcement) => (
              <li className="announcement__item" key={announcement.id}>
                {announcement.image && (
                  <img
                    className="announcement__image"
                    src={announcement.image}
                    alt={announcement.country || "Оголошення"}
                  />
                )}
                <h4 className="announcement__title">{announcement.country}</h4>
                <p className="announcement__title">
                  {announcement.street}, {announcement.city}.
                </p>
              </li>
            ))
          ) : (
            <li>Немає оголошень</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Announcement;
