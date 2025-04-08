import React, { Component } from "react";
import "./List.css";

class List extends Component {
  state = { announcements: [] };

  componentDidMount() {
    this.fetchAnnouncements();

    // Обновление каждые 10 секунд (можно изменить по желанию)
    this.interval = setInterval(this.fetchAnnouncements, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchAnnouncements = async () => {
    try {
      const res = await fetch("https://67c950b40acf98d07089b4a2.mockapi.io/announcement");
      const data = await res.json();
      if (Array.isArray(data)) {
        // Обновляем только если длина изменилась
        if (data.length !== this.state.announcements.length) {
          this.setState({ announcements: data });
        }
      } else {
        this.setState({ announcements: [] });
      }
    } catch (error) {
      console.error("Помилка при завантаженні оголошень:", error);
      this.setState({ announcements: [] });
    }
  };

  render() {
    const { announcements } = this.state;
    return (
      <div className="container">
        <ul className="announcements__list">
          {announcements.length > 0 ? (
            announcements.map((announcement) => (
              <li key={announcement.id}>
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

export default List;
