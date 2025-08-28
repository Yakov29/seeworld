import "./Country.css";
import ConturyItem from "./CountryItem/CountryItem";
import Container from "../Container/Container";

const Contury = ({franceData, italyData}) => {
  return (
    <section className="country">
      <Container>
        <h2 className="country__section-title">Найпопулярніші країни для подорожей</h2>
        <div className="country">
            <h3 className="country__name">
            Франція
            </h3>
          <ul className="country__list">
           {
            franceData.map((data) => {
                return <ConturyItem key={data.id} franceData={data}/>;
            })
           }
          </ul>
        </div>
        <div className="country">
            <h3 className="country__name">
            Італія
            </h3>
          <ul className="country__list">
           {
            italyData.map((data) => {
                return <ConturyItem key={data.id} franceData={data}/>;
            })
           }
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Contury;
