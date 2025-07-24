import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { france } from "./data/country1";
import { italy } from "./data/country2";

import Homepage from "./pages/Homepage/Homepage";
import AllAnnouncements from "./pages/AllAnnouncements/AllAnnouncements";
import Cabinet from "./pages/Cabinet/Cabinet";
import Register from "./pages/Register/Register";

import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    localStorage.setItem("user", user);
  }, []);


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

  const newUser = {
    name,
    surname,
    email,
    phone,
    age,
    password,
  };

  localStorage.setItem("user", JSON.stringify(newUser));

  setProfile(newUser);

  console.log("Реєстрація успішна:", newUser);
};




  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/announcements" element={<AllAnnouncements />} />
        <Route path="/cabinet" element={<Cabinet data={profile} />} />
        <Route path="/register" element={<Register register={register}/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
