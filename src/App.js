import { france } from "./data/country1";
import { italy } from "./data/country2";

// import HeaderImage from './homepage/Header/HeaderImage/HeaderImage';
import Header from "./homepage/Header/header";
import Hero from "./homepage/components/Hero/Hero";
import Criteria from "./homepage/components/Criteria/Criteria";
import Contury from "./homepage/components/Country/Country";
import Announcement from "./homepage/components/Announcement/Announcement";
import Footer from "./homepage/components/Footer/Footer";

import Backdrop from "./pages/register/components/Backdrop/Backdrop";
import LoginBackdrop from "./pages/login/components/Backdrop/LoginBackdrop";
import PasswordBackdrop from "./pages/password/components/Backdrop/PasswordBackdrop";
import CabinetBackdrop from "./pages/cabinet/components/Backdrop/CabinetBackdrop";
import NewBackdrop from "./pages/new/components/Backdrop/NewBackdrop";

import List from "./announcements/components/List/List"
import { Component } from "react";
import { use } from "react";
import { type } from "@testing-library/user-event/dist/type";

class App extends Component {
  state = { users: [] };

 

  formSend = async (event) => {
    event.preventDefault();

    const user = {
      name: event.target.elements.name.value,
      surname: event.target.elements.surname.value,
      email: event.target.elements.email.value,
      tel: event.target.elements.tel.value,
      age: event.target.elements.age.value,
      password: event.target.elements.password.value,
    };

    const existingUser = this.state.users.find((u) => u.email === user.email);
    if (existingUser) return alert("Такий Email вже існує");
    if (user.password !== event.target.elements.confirm.value) return alert("Паролі не співпадають");

    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    if (response.ok) alert("Реєстрація успішна");
  };

  loginSend = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const response = await fetch(`http://localhost:3000/users?email=${email}`);
    const users = await response.json();
    const user = users.find((u) => u.password === password);

    if (user) {
      localStorage.setItem("session", JSON.stringify(user));
      alert("Ви успішно увійшли");
    } else {
      alert("Невірний логін або пароль");
    }
  };

  newPass = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const newPassword = prompt("Введіть новий пароль");

    const response = await fetch(`http://localhost:3000/users?email=${email}`);
    const users = await response.json();
    const user = users[0];

    if (user) {
      await fetch(`http://localhost:3000/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...user, password: newPassword }),
      });
      alert("Пароль оновлено");
    } else {
      alert("Email не знайдено");
    }
  };

  new = async (event) => {
    event.preventDefault();
    const data = {
      country: event.target.elements.country.value,
      city: event.target.elements.city.value,
      address: event.target.elements.address.value,
      type: Array.from(event.target.querySelectorAll('input[type="checkbox"]:checked')).map(c => c.name),
      description: event.target.elements.description.value,
      photos: event.target.elements.photos.value,
      email: event.target.elements.email.value,
    };

    const response = await fetch("http://localhost:3000/announcements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) alert("Оголошення додано");
  };

  render() {
    return (
      <div className="App">
        <NewBackdrop method={this.new} />
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
