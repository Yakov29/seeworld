import { useEffect, useState, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { postAnnouncementAPI } from "./api/postAnnouncementAPI";
import { getProfileAPI } from "./api/getProfileAPI";

const Header = lazy(() => import("./components/Header/header"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const AllAnnouncements = lazy(() => import("./pages/AllAnnouncements/AllAnnouncements"));
const Cabinet = lazy(() => import("./pages/Cabinet/Cabinet"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const Create = lazy(() => import("./pages/Create/Create"));
const SuccesModal = lazy(() => import("./components/SuccesModal/SuccesModal"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Favorite = lazy(() => import("./pages/Favorites/Favorites"));

const App = () => {
  const [selectedType, setSelectedType] = useState("");
  const [profile, setProfile] = useState(null);
  const [favorites, setFavorites] = useState([]);

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
    setProfile(newUser);
    document.location.href = "/";
    e.target.reset();
  };

  // Логин
  const login = (e) => {
    e.preventDefault();
    const formData = e.target;
    const email = formData.email.value;
    const password = formData.password.value;
    getProfileAPI(email).then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      setProfile(data);
      document.location.href = "/";
    });
  };

  // Выход
  const leave = () => {
    localStorage.removeItem("user");
    setProfile(null);
  };

  // Выбор типа при создании объявления
  const selectType = (e) => {
    document.querySelectorAll(".createform__button").forEach((el) => {
      el.style.backgroundColor = "#fff";
      el.style.color = "#000";
    });
    e.target.style.backgroundColor = "#266294";
    e.target.style.color = "#fff";
    setSelectedType(e.target.textContent);
  };

  // Создание объявления
  const createAnnouncement = (e) => {
    e.preventDefault();
    const data = e.target;
    const announcement = {
      country: data.country.value,
      city: data.city.value,
      street: data.street.value,
      type: selectedType,
      guests: data.guests.value,
      bedrooms: data.bedrooms.value,
      beds: data.beds.value,
      bathrooms: data.beds.value,
      description: data.description.value,
      image: data.image.value,
      email: data.email.value
    };
    postAnnouncementAPI(announcement);
    document.location.href = "/announcements";
  };

  // Добавление/удаление из избранного
  const favorite = (e, announcementId) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Спочатку увійдіть в акаунт");
      return;
    }
    const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const alreadyAdded = existingFavorites.some(fav => fav.announcementId === announcementId);
    let updatedFavorites;
    if (alreadyAdded) {
      updatedFavorites = existingFavorites.filter(fav => fav.announcementId !== announcementId);
    } else {
      updatedFavorites = [...existingFavorites, { announcementId }];
    }
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  // Получение избранного при загрузке
  const getFavorites = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return [];
    try {
      const res = await fetch(`https://6882916c21fa24876a9b3c72.mockapi.io/users/${user.id}`);
      if (!res.ok) throw new Error("Не вдалося отримати користувача");
      const data = await res.json();
      return Array.isArray(data.favorites) ? data.favorites : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const loadFavorites = async () => {
      const favs = await getFavorites();
      setFavorites(favs);
    };
    loadFavorites();

    // Загрузка профиля из localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setProfile(storedUser);
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header profile={profile} leave={leave} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/announcements" element={<AllAnnouncements favorite={favorite} />} />
          <Route path="/cabinet" element={<Cabinet data={profile} leave={leave}/>} />
          <Route path="/register" element={<Register register={register} />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/create" element={<Create createAnnouncement={createAnnouncement} selectType={selectType} />} />
          <Route path="/favorites" element={<Favorite favorites={favorites} favorite={favorite} />} />
        </Routes>
        <SuccesModal />
        <Footer />
      </div>
    </div>
  );
};

export default App;
