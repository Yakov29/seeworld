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
import { Component } from "react";
import { use } from "react";
import { type } from "@testing-library/user-event/dist/type";

class App extends Component {
  state = {
    users: [
      {
        name: "",
        surname: "",
        email: "",
        tel: "",
        age: "",
        password: "",
      },
    ],
  };

  formSend = (event) => {
    event.preventDefault();

    const user = {
      name: event.target.elements.name.value,
      surname: event.target.elements.surname.value,
      email: event.target.elements.email.value,
      tel: event.target.elements.tel.value,
      age: event.target.elements.age.value,
      password: event.target.elements.password.value,
      confirm: event.target.elements.confirm.value,
    };

    const emails = this.state.users.forEach((user) => {
      console.log(user.email);
    });

    if (user.password !== user.confirm) {
      alert("Паролі не співпадають");
    }
    if (emails === user.email) {
      alert("Такій Email вже існує");
    }

    this.state.users.push(user);
  };

  loginSend = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
    console.log(data);

    const emails = this.state.users.forEach((user) => {
      console.log(user.email);
      if (data.email === user.email && data.password === user.password) {
        localStorage.setItem("session", {
          email: data.email,
        });
        alert("Ви успішно увійшли");
      } else {
        alert("Ви ввели невірний логін або пароль");
      }
    });
  };

  newPass = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.elements.email.value,
    };
    console.log(data);
  };

  cabinet = (event) => {
    event.preventDefault();
    const change = {
      name: event.target.elements.name.value,
      surname: event.target.elements.surname.value,
      email: event.target.elements.email.value,
      tel: event.target.elements.tel.value,
      age: event.target.elements.date.value,
      gender: event.target.elements.gender.value,
      country: event.target.elements.country.value,
    };

    this.state.users.push(change);

    console.log(this.state);
  };



  new = (event) => {
    event.preventDefault();
    const data = {
      country: event.target.elements.country.value,
      city: event.target.elements.city.value,
      address: event.target.elements.address.value,
      type: [],
      // description: event.target.elements.description.value,
      // photos: event.target.elements.photos.value,
      email: event.target.elements.email.value
    };
    
    const numberBox = event.target.querySelectorAll('div[class="new__item__data__box"]')
    numberBox.forEach((box) => {
      const buttonLeft = box.querySelectorAll('button[id="button-left"]')
      const buttonRight = box.querySelectorAll('button[id="button-right"]')
      let number = 0
      const numberText = box.querySelectorAll('p[class="new__item__data__number"]')
      console.log(buttonRight)
    })

    const checkboxes = event.target.querySelectorAll('input[type="checkbox"]:checked')
    console.log(checkboxes)
    checkboxes.forEach((checkbox) => {
      data.type.push(checkbox.name)
      console.log(data)
    })
   
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Backdrop method={this.formSend} />
        <CabinetBackdrop method={this.cabinet} />
        <LoginBackdrop method={this.loginSend} />
        <PasswordBackdrop method={this.newPass} />
        <NewBackdrop method={this.new} />
        <Hero />
        <Criteria />
        <Contury italyData={italy} franceData={france} />
        <Announcement />
        <Footer />
      </div>
    );
  }
}

export default App;
