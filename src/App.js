import React, { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";


// import Backdrop from "./homepage/modals/register/components/Backdrop/Backdrop";
// import LoginBackdrop from "./homepage/modals/login/components/Backdrop/LoginBackdrop";
// import PasswordBackdrop from "./homepage/modals/password/components/Backdrop/PasswordBackdrop";
// import CabinetBackdrop from "./homepage/modals/cabinet/components/Backdrop/CabinetBackdrop";
// import NewBackdrop from "./homepage/modals/new/components/Backdrop/NewBackdrop";

import { france } from "./data/country1";
import { italy } from "./data/country2";

import Homepage from "./pages/Homepage/Homepage";
import AllAnnouncements from "./pages/AllAnnouncements/AllAnnouncements"
import Cabinet from "./pages/Cabinet/Cabinet";

import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";

import { getProfileAPI } from "./api/getProfileAPI";

const App = () => {
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState(null);
  useEffect(() => {


    const user = localStorage.getItem("user")
    const userData = JSON.parse(user)
    if (userData) {
      setProfile(userData)

    }

  }, [])


  // Якщо в useEffect масив залежностей порожний,
  //  то код в useEffect виконається лише прі першому рендері сторінки,
  //  тобто це заміна componentDidMount().

  // Якщо у useEffect в масиві залежностей вказана змінна (чи кілька змінних) ,
  // то useEffect() ініціюе ререндер сторінки при зміні цієі звінної в масиві залежностей.

  const formSend = async (event) => {
    event.preventDefault();

    const user = {
      name: event.target.elements.name.value,
      surname: event.target.elements.surname.value,
      email: event.target.elements.email.value,
      tel: event.target.elements.tel.value,
      age: event.target.elements.age.value,
      password: event.target.elements.password.value,
    };

    const existingUser = users.find((u) => u.email === user.email);
    if (existingUser) return alert("Такий Email вже існує");
    if (user.password !== event.target.elements.confirm.value)
      return alert("Паролі не співпадають");

    const response = await fetch(
      "https://67c950b40acf98d07089b4a2.mockapi.io/users",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );

    const newUser = await response.json();
    console.log(newUser);
    localStorage.setItem(
      "user",
      JSON.stringify({ email: newUser.email, password: newUser.password })
    );
    if (response.ok) alert("Реєстрація успішна");
    window.location.reload();
  };

  const loginSend = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const response = await fetch(
      `https://67c950b40acf98d07089b4a2.mockapi.io/users?email=${email}&password=${password}`
    );
    const users = await response.json();
    const user = users[0];

    if (user && user.email === email && user.password === password) {
      console.log(user);
      localStorage.setItem(
        "user",
        JSON.stringify({ email: user.email, password: user.password })
      );
      alert("Ви успішно увійшли");
      window.location.reload();
    } else {
      alert("Невірний логін або пароль");
    }
  };

  const newPass = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const newPassword = prompt("Введіть новий пароль");

    const response = await fetch(
      `https://67c950b40acf98d07089b4a2.mockapi.io/users?email=${email}`
    );
    const users = await response.json();
    const user = users[0];

    if (user) {
      await fetch(
        `https://67c950b40acf98d07089b4a2.mockapi.io/users/${user.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...user, password: newPassword }),
        }
      );
      alert("Пароль оновлено");
    } else {
      alert("Email не знайдено");
    }
  };





  return (
    <div className="App">
      {/* <Backdrop method={formSend} />
      <CabinetBackdrop method={profile} />
      <LoginBackdrop method={loginSend} />
      <PasswordBackdrop method={newPass} />
      <NewBackdrop />
      <Hero />
      <Criteria />
      <Contury italyData={italy} franceData={france} />
      <Announcement /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/announcements" element={<AllAnnouncements />} />
        {console.log(profile)}
        <Route path="/cabinet" element={<Cabinet data={profile} />} />
      </Routes>
      <Footer />
    </div>

  );
};

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     users: [],
//     profile: null,
//   };

//   componentDidMount() {
//     const openNewModal = (event) => {
//       event.preventDefault();
//       document.querySelector(".new__backdrop").style.display = "block";
//     };
//     const openButton = document.querySelector(".header__button");

//     getProfileAPI()
//       .then((profileData) => {
//         this.setState({ profile: profileData }, () => {

//           if (this.state.profile !== null) {
//             const headerButton = document.querySelector(".header__button");
//             if (headerButton) {
//               headerButton.textContent = "Додати оголошення";
//               openButton.addEventListener("click", openNewModal);
//             }
//           }
//         });
//       })
//       .catch((error) => {

//       });
//   }

//   formSend = async (event) => {
//     event.preventDefault();

//     const user = {
//       name: event.target.elements.name.value,
//       surname: event.target.elements.surname.value,
//       email: event.target.elements.email.value,
//       tel: event.target.elements.tel.value,
//       age: event.target.elements.age.value,
//       password: event.target.elements.password.value,
//     };

//     const existingUser = this.state.users.find((u) => u.email === user.email);
//     if (existingUser) return alert("Такий Email вже існує");
//     if (user.password !== event.target.elements.confirm.value)
//       return alert("Паролі не співпадають");

//     const response = await fetch(
//       "https://67c950b40acf98d07089b4a2.mockapi.io/users",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(user),
//       }
//     );

//     const newUser = await response.json();
//     console.log(newUser);
//     localStorage.setItem(
//       "user",
//       JSON.stringify({ email: newUser.email, password: newUser.password })
//     );
//     if (response.ok) alert("Реєстрація успішна");
//     window.location.reload();
//   };

//   loginSend = async (event) => {
//     event.preventDefault();
//     const email = event.target.elements.email.value;
//     const password = event.target.elements.password.value;

//     const response = await fetch(
//       `https://67c950b40acf98d07089b4a2.mockapi.io/users?email=${email}&password=${password}`
//     );
//     const users = await response.json();
//     const user = users[0];

//     if (user && user.email === email && user.password === password) {
//       console.log(user);
//       localStorage.setItem(
//         "user",
//         JSON.stringify({ email: user.email, password: user.password })
//       );
//       alert("Ви успішно увійшли");
//       window.location.reload();
//     } else {
//       alert("Невірний логін або пароль");
//     }
//   };

//   newPass = async (event) => {
//     event.preventDefault();
//     const email = event.target.elements.email.value;
//     const newPassword = prompt("Введіть новий пароль");

//     const response = await fetch(
//       `https://67c950b40acf98d07089b4a2.mockapi.io/users?email=${email}`
//     );
//     const users = await response.json();
//     const user = users[0];

//     if (user) {
//       await fetch(
//         `https://67c950b40acf98d07089b4a2.mockapi.io/users/${user.id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ ...user, password: newPassword }),
//         }
//       );
//       alert("Пароль оновлено");
//     } else {
//       alert("Email не знайдено");
//     }
//   };

//   render() {
//     const { profile } = this.state; // Извлекаем данные профиля из состояния

//     return (
//       <div className="App">
//         <Header />
//         <Backdrop method={this.formSend} />
//         <CabinetBackdrop method={this.cabinet} />
//         <LoginBackdrop method={this.loginSend} />
//         <PasswordBackdrop method={this.newPass} />
//         <NewBackdrop method={this.new} />
//         <Hero />
//         <Criteria />
//         <Contury italyData={italy} franceData={france} />
//         <Announcement />
//         <Footer />

//       </div>
//     );
//   }
// }

export default App;
