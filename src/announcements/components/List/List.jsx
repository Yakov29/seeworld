import React, { Component } from "react";
import "./List.css"

class List extends Component {
    state = { announcements: [] };

    componentDidMount() {
       const response = fetch("https://67c950b40acf98d07089b4a2.mockapi.io/announcements").then((res) => res.json())
            .then((announcements) => {
                if (Array.isArray(announcements)) {
                    this.setState({ announcements });
                    console.log(announcements)
                
                } else {
                    this.setState({ announcements: [] });
                }
            })
            .catch((error) => {
                this.setState({ announcements: [] });
            });
            console.log(response)
    }


    componentDidUpdate() {
        const response = fetch("https://67c950b40acf98d07089b4a2.mockapi.io/announcements").then((res) => res.json())
        .then((announcements) => {
            if (Array.isArray(announcements)) {
                if (announcements.length !== this.state.announcements.length) {
                    this.setState({ announcements });
                }
                console.log(announcements)
            
            } else {
                this.setState({ announcements: [] });
            }
        })
        .catch((error) => {
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