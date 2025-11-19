import "../Country.css";

const CountryItem = ({ data }) => {
  return (
    <li className="country__item">
      <img className="country__image" src={data.image} alt="country" />
      <span className="country__title">{data.title}</span>
      <p className="country__votes">{data.hotels} готелів</p>
    </li>
  );
};

export default CountryItem;