import React, { Component, useEffect, useState } from "react";
import "./Announcement.css";
import { getAnnouncementAPI } from "../../api/getAnnouncementAPI";



const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchAnnouncements();
  },[])

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
              {announcement.photos && (
                <img
                  className="announcement__image"
                  src={announcement.photos}
                  alt={announcement.country || "Оголошення"}
                />
              )}
              <h4 className="announcement__title">{announcement.country}</h4>
              <p className="announcement__title">
                {announcement.address}, {announcement.city}.
              </p>
            </li>
          ))
        ) : (
          <li>Немає оголошень</li>
        )}
      </ul>
    </div>
  );
};

export default Announcement;
