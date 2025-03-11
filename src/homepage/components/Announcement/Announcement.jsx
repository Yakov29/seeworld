import React from 'react';
import './Announcement.css';
import Container from "../Container/Container";
import { Component } from 'react';
import { getAnnouncementAPI } from '../../../api/getAnnouncementAPI';
import { postAnnouncementAPI } from '../../../api/postAnnouncementAPI';

import image1 from "../../../images/announcement1.png"
import image2 from "../../../images/announcement2.png"
import image3 from "../../../images/announcement3.png"
import image4 from "../../../images/announcement4.png"
import image5 from "../../../images/announcement5.png"
import image6 from "../../../images/announcement6.png"
import image7 from "../../../images/announcement7.png"
import image8 from "../../../images/announcement8.png"
import image9 from "../../../images/announcement9.png"

class Announcement extends Component {
    
    state = { announcements: [] };

    componentDidMount() {
      
        getAnnouncementAPI().then((announcements) => {
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
            console.log(getAnnouncementAPI())
    
    }


    componentDidUpdate() {
        getAnnouncementAPI().then((announcements) => {
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
                <h2 className='anannouncements__title'>Останні оголошення</h2>
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
};

export default Announcement;