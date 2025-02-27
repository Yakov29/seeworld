import React, { Component } from "react";
import "./List.css"

class List extends Component {
    state = { announcements: [] };

    componentDidMount() {
        fetch("http://localhost:3000/announcements")
            .then((res) => res.json())
            .then((announcements) => {
                if (Array.isArray(announcements)) {
                    this.setState({ announcements });
                    console.log(announcements)
                } else {
                    this.setState({ announcements: [] });
                }
            })
            .catch((error) => {
                console.error("Помилка при завантаженні даних:", error);
                this.setState({ announcements: [] });
            });
    }

    render() {
        return (
            <div className="container">
            <ul className="announcements__list">
                {this.state.announcements.length > 0 ? (
                    this.state.announcements.map((announcement) => (
                        <li key={announcement.id}>
                            <img className="announcement__image" src={announcement.photos} alt="image" />
                            <h4 className="announcement__title">{announcement.country}</h4>
                            <p className="announcement__title">{announcement.address}, {announcement.city}.</p>
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