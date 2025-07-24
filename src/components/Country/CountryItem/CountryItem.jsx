import React from "react";
import "../Country.css";

const ConturyItem = ({franceData}) => {
  return (
    <li className="country__item">
      <img className="country__image" src={franceData.image} alt="country" />
      <span className="country__title">{franceData.title}</span>
      <p className="country__votes">{franceData.hotels} готелів</p>
    </li>
  );
};

export default ConturyItem;
