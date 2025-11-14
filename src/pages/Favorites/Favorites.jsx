import FavoritesList from "../../components/FavoritesList/FavoritesList";

const Favorites = ({ favorites }) => {
  return (
    <main>
      <FavoritesList favorites={favorites}/>
    </main>
  );
};

export default Favorites;
