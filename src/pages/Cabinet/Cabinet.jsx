import { useState, useEffect } from "react";
import "./Cabinet.css";
import Container from "../../components/Container/Container";

const Cabinet = ({ leave }) => {
    const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        document.title = "See World | Cabinet";

        const user = localStorage.getItem("user");

        if (user) {
            try {
                const userData = JSON.parse(user);
                if (userData && userData.email) {
                    setEmail(userData.email);
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.error("Помилка при розборі даних користувача:", error);
                setIsLoggedIn(false);
            }
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return (
        <main className="cabinet__main">
            <section className="cabinet">
                <Container>
                    <h2 className="cabinet__title">Особистий кабінет</h2>

                    {isLoggedIn ? (
                        <>
                            <p className="cabinet__description">
                                Оновіть свою інформацію та дізнайтеся, як вона використовується.
                            </p>

                            <ul className="cabinet__list">
                                <li className="cabinet__item">
                                    <p className="cabinet__type">Email</p>
                                    <input
                                        className="cabinet__input"
                                        type="email"
                                        placeholder={email}
                                        readOnly
                                    />
                                </li>
                                <li className="cabinet__item">
                                    <p className="cabinet__type">Password</p>
                                    <input
                                        className="cabinet__input"
                                        type="password"
                                        placeholder="********"
                                        readOnly
                                    />
                                </li>
                            </ul>
                        </>
                    ) : (
                        <p className="cabinet__warning">
                            Будь ласка, зареєструйтесь або увійдіть у систему, щоб переглянути свій кабінет.
                        </p>
                    )}

                   <button className="cabinet__leave" onClick={leave} type="button">Вийти</button>

                </Container>
            </section>
        </main>
    );
};

export default Cabinet;