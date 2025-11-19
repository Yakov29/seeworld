import { useEffect, useState, lazy } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getProfileAPI } from "./api/getProfileAPI";
import pushProfileAPI from "./api/pushProfileAPI";

const Header = lazy(() => import("./components/Header/header"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const AllAnnouncements = lazy(() =>
  import("./pages/AllAnnouncements/AllAnnouncements")
);
const Cabinet = lazy(() => import("./pages/Cabinet/Cabinet"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const Create = lazy(() => import("./pages/Create/Create"));
const SuccesModal = lazy(() => import("./components/SuccesModal/SuccesModal"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Favorite = lazy(() => import("./pages/Favorites/Favorites"));

const App = () => {
  const [profile, setProfile] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const surname = formData.get("surname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const age = formData.get("age");
    const password = formData.get("password");
    const reppassword = formData.get("reppassword");
    if (password !== reppassword) {
      alert("Паролі не співпадають");
      return;
    }
    const newUser = { name, surname, email, phone, age, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    pushProfileAPI(newUser);
    setProfile(newUser);
    e.target.reset();

    navigate("/");
  };

  const login = (e) => {
    e.preventDefault();
    const formData = e.target;
    const email = formData.email.value;

    getProfileAPI(email).then((data) => {
      if (data === null) {
        alert("Неправильный Email или пользователь не найден");
      } else {
        localStorage.setItem("user", JSON.stringify(data));
        setProfile(data);
        navigate("/");
      }
    });
  };

  const leave = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("favorites");
    setProfile(null);
    setFavorites([]);
    navigate("/");
  };

  const favorite = (e, announcementId) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Спочатку увійдіть в акаунт");
      return;
    }
    const existingFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];
    const alreadyAdded = existingFavorites.some(
      (fav) => fav.announcementId === announcementId
    );
    let updatedFavorites;
    if (alreadyAdded) {
      updatedFavorites = existingFavorites.filter(
        (fav) => fav.announcementId !== announcementId
      );
    } else {
      updatedFavorites = [...existingFavorites, { announcementId }];
    }
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const getFavorites = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return [];
    try {
      const res = await fetch(
        `https://6882916c21fa24876a9b3c72.mockapi.io/users/${user.id}`
      );
      if (!res.ok) {
        return [];
      }
      const data = await res.json();
      return Array.isArray(data.favorites) ? data.favorites : [];
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    const loadFavorites = async () => {
      const favs = await getFavorites();
      setFavorites(favs);
    };
    loadFavorites();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setProfile(storedUser);
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header profile={profile} leave={leave} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/announcements"
            element={<AllAnnouncements favorite={favorite} profile={profile}/>}
          />
          <Route
            path="/cabinet"
            element={<Cabinet data={profile} leave={leave} />}
          />
          <Route path="/register" element={<Register register={register} />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route
            path="/create"
            element={
              <Create />
            }
          />
          <Route
            path="/favorites"
            element={<Favorite favorites={favorites} favorite={favorite} />}
          />
        </Routes>
        <SuccesModal />
        <Footer />
      </div>
    </div>
  );
};

export default App;