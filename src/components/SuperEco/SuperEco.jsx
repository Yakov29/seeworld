import React, { useEffect } from "react";
import Container from "../Container/Container";
import { data, Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { getAnnouncementAPI } from "../../api/getAnnouncementAPI";
import "./SuperEco.css";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const SuperEco = ({ favorite }) => {
  const [announcements, setAnnouncements] = React.useState([]);
  useEffect(() => {
    getAnnouncementAPI().then((data) => {
      console.log(data);
      setAnnouncements(data);
    });
  }, []);
  useEffect(() => {
    console.log(announcements);
  }, [announcements]);
  console.log(announcements);
  return (
    <section className="supereco">
      <Container>
        <h2 className="allannouncements__title">Всі оголошення</h2>
        {/* <div className="supereco__content">
                    <h2 className="supereco__title">Суперекономія</h2>
                    <Link className="supereco__open" to="">Відкрити всі оголошення</Link>
                </div> */}
        <ul className="supereco__list">
          {announcements.map((element) => {
            return (
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
                {/* <span className="supereco__stars"><FaRegStar /> 10</span> */}
                <button
                  onClick={(e) => favorite(e, element.id)}
                  className="supereco__favorite"
                >
                  <FaRegHeart />
                </button>
                <p className="supereco__id">ID: {element.id}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default SuperEco;
