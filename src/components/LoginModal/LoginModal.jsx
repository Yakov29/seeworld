import Container from "../Container/Container";
import "./LoginModal.css"
import { Link } from "react-router-dom";

const LoginModal = ({ login }) => {
    return (
        <section className="login">
            <Container>
                <form className="login__form" onSubmit={login}>
                    <h2 className="login__title">Увійти</h2>
                    <span className="login__description">
                        Увійдіть, щоб отримати можливість запропонувати своє житло
                    </span>
                    <ul className="login__inputs">
                        <li className="login__inputs__item">
                            <input
                                className="login__input"
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email*"
                            />
                        </li>
                        <li className="login__inputs__item">
                            <input
                                className="login__input"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Пароль*"
                            />
                        </li>
                    </ul>
                    <span className="login__forgot">Забули пароль?</span>
                    <button className="login__submit" type="submit">Увійти</button>
                    <div className="login__noaccount">
                        <h3 className="login__noaccount__title">
                            Не маєте акаунту?
                        </h3>
                        <Link to="/register" className="login__noaccount__link">Зареєстуйтесь</Link>
                    </div>
                </form>
            </Container>
        </section>
    )
}

export default LoginModal