import React, { Component } from 'react';
import './Announcement.css';
import { getAnnouncementAPI } from '../../../api/getAnnouncementAPI';

// Изображения импортированы, но не используются. Можно удалить, если не нужны:
import image1 from "../../../images/announcement1.png";
import image2 from "../../../images/announcement2.png";
import image3 from "../../../images/announcement3.png";
import image4 from "../../../images/announcement4.png";
import image5 from "../../../images/announcement5.png";
import image6 from "../../../images/announcement6.png";
import image7 from "../../../images/announcement7.png";
import image8 from "../../../images/announcement8.png";
import image9 from "../../../images/announcement9.png";

class Announcement extends Component {
  state = {
    announcements: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.fetchAnnouncements();
  }

  componentWillUnmount() {
    // если в будущем появится setInterval или другие подписки — очищаем
  }

  fetchAnnouncements = async () => {
    try {
      const announcements = await getAnnouncementAPI();
      if (Array.isArray(announcements)) {
        this.setState({ announcements, loading: false, error: false });
      } else {
        this.setState({ announcements: [], loading: false, error: true });
      }
    } catch (err) {
      this.setState({ announcements: [], loading: false, error: true });
      console.error("Помилка при завантаженні оголошень:", err);
    }
  };

  render() {
    const { announcements, loading, error } = this.state;

    return (
      <div className="container">
        <h2 className="announcement__title-section">Останні оголошення</h2>
        <ul className="announcements__list">
          {loading ? (
            <li>Завантаження оголошень...</li>
          ) : error ? (
            <li>Помилка при завантаженні оголошень</li>
          ) : announcements.length > 0 ? (
            announcements.map((announcement) => (
              <li className="announcement" key={announcement.id}>
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
  }
}

export default Announcement;
