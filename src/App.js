import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { france } from "./data/country1";
import { italy } from "./data/country2";

import pushProfileAPI from "./api/pushProfileAPI";
import { postAnnouncementAPI } from "./api/postAnnouncementAPI";

import Homepage from "./pages/Homepage/Homepage";
import AllAnnouncements from "./pages/AllAnnouncements/AllAnnouncements";
import Cabinet from "./pages/Cabinet/Cabinet";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Create from "./pages/Create/Create";

import SuccesModal from "./components/SuccesModal/SuccesModal";

import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import { getProfileAPI } from "./api/getProfileAPI";
import logo from "./logo.svg";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const [profile, setProfile] = useState(null);



  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   localStorage.setItem("user", user);
  //
  // }, []);


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
    pushProfileAPI(newUser);


    console.log("Реєстрація успішна:", newUser);

    const modal = document.querySelector(".succesModal")

    modal.style.display = "flex";

    setTimeout(() => {
      const modal = document.querySelector(".succesModal")
      modal.style.display = "none"
    }, 2500)

    document.location.href = "/"
    e.target.reset()

  };


  const login = (e) => {
    e.preventDefault()


    const formData = e.target
    const email = formData.email.value
    const password = formData.password.value



    getProfileAPI(email).then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      document.location.href = "/"
    })



  }


  const leave = () => {
    localStorage.removeItem("user")
    console.log("LOGOUT");
  }


  const selectType = (e) => {
    document.querySelectorAll(".createform__button").forEach((element) => {
      element.style.backgroundColor = "#fff"
      element.style.color = "#000"
    })
    // присваивание
    e.target.style.backgroundColor = "#266294"
    e.target.style.color = "#fff"
    setSelectedType(e.target.textContent)
  }

  const createAnnouncement = (e) => {
    e.preventDefault()

    const types = document.querySelectorAll(".createform__button")
    types.forEach((element) => {
      console.log(element)
    })

    const data = e.target
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
    }
    console.log(announcement)
    console.log(selectedType)
    postAnnouncementAPI(announcement)
    document.location.href = "/announcements"
  }


  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/announcements" element={<AllAnnouncements />} />
          <Route path="/cabinet" element={<Cabinet data={profile} />} leave={leave} />
          <Route path="/register" element={<Register register={register} />} />
          <Route path="/login" element={<Login login={login} />} />
          <Route path="/create" element={<Create createAnnouncement={createAnnouncement} selectType={selectType} />} />

        </Routes>
        <SuccesModal />
        <Footer />
      </div>
    </div>
  );
};

export default App;
