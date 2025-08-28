import {useEffect} from "react";
import Container from "../../components/Container/Container";
import "./Register.css"
import {Link} from "react-router-dom";

const Register = ({ register }) => {
    useEffect(() => {
        document.title = "SeeWorld | Реєстрація"
    }, []);
    return (
        <main>
            <section className="register">
                <Container>
                    <form onSubmit={register} className="register__form">
                        <h2 className="register__title">Зареєстуватися</h2>
                        <p className="register__description">Зареєструйтесь, щоб отримати можливість забронювати житло</p>
                        <ul className="register__list">
                            <li className="register__item">
                                <input type="text" name="name" placeholder="Ваше ім’я*" className="register__input" />
                            </li>
                            <li className="register__item">
                                <input type="text" name="surname" placeholder="Прізвище*" className="register__input" />
                            </li>
                            <li className="register__item">
                                <input type="email" name="email" placeholder="Email*" className="register__input" />
                            </li>
                            <li className="register__item">
                                <input type="text" name="phone" placeholder="Номер телефону*" className="register__input" />
                            </li>
                            <li className="register__item">
                                <input type="number" name="age" placeholder="Ваш вік*" className="register__input" />
                            </li>
                            <li className="register__item">
                                <h4 className="register__password">Придумайте пароль</h4>
                                <input type="password" name="password" placeholder="**************" className="register__input" />
                            </li>
                            <li className="register__item">
                                <input type="password" name="reppassword" placeholder="Password111111" className="register__input" />
                            </li>
                        </ul>
                        <button className="register__button" type="submit">Зареєстуватись</button>
                    </form>
                    <div className="register__noaccount">
                        <h3 className="register__noaccount__title">
                            Є обліковий запис?
                        </h3>
                        <Link to="/login" className="register__noaccount__link">Увійдіть</Link>
                    </div>
                </Container>
            </section>
        </main>
    )
}

export default Register