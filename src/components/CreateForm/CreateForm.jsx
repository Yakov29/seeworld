import React from "react";
import "./CreateForm.css"
import Container from "../Container/Container"

const CreateForm = ({ createAnnouncement, selectType }) => {
    return (
        <section className="createform">
            <Container>
                <h2 className="createform__title">Створити оголошення</h2>
                <form className="createform__form" onSubmit={createAnnouncement}>
                <ul className="createform__list">
                    <li className="createform__item">
                        <h4 className="cteateform__text">Ваша країна</h4>
                        <input type="text" className="createform__input" name="country" placeholder="Введіть назву країни" />
                    </li>
                    <li className="createform__item">
                        <h4 className="cteateform__text">Вкажіть населений пункт</h4>
                        <input type="text" className="createform__input" name="city" placeholder="Населений пункт " />
                    </li>
                    <li className="createform__item">
                        <h4 className="cteateform__text">Вулиця, район міста</h4>
                        <input type="text" className="createform__input" name="street" placeholder="Наприклад, вул. Олімпійська, Південний район" />
                    </li>
                    <li className="createform__item">
                        <h4 className="cteateform__text">Вкажіть тип приміщення</h4>
                        <div className="cteateform__buttons">
                            <button type="button" onClick={selectType} className="createform__button">Будинок</button>
                            <button type="button" onClick={selectType} className="createform__button">Квартира</button>
                            <button type="button" onClick={selectType} className="createform__button">Кімната</button>
                            <button type="button" onClick={selectType} className="createform__button">Студія</button>
                        </div>
                    </li>
                    <li className="createform__item">
                        <h4 className="cteateform__text">Вкажіть основні відомості про своє житло</h4>
                        <ul className="createform__more">
                            <li className="createform__more-item">
                                <span className="createform__more-span">Гості</span>
                                <input type="number" name="guests" placeholder="1" className="createform__more-input" />
                            </li>
                            <li className="createform__more-item">
                                <span className="createform__more-span">Спальні</span>
                                <input type="number" name="bedrooms" placeholder="1" className="createform__more-input" />
                            </li>
                            <li className="createform__more-item">
                                <span className="createform__more-span">Ліжка</span>
                                <input type="number" name="beds" placeholder="1" className="createform__more-input" />
                            </li>
                            <li className="createform__more-item">
                                <span className="createform__more-span">Ванні кімнати</span>
                                <input type="number" name="bathrooms" placeholder="1" className="createform__more-input" />
                            </li>
                        </ul>
                    </li>
                    <li className="createform__item">
                        <h4 className="cteateform__text">Запишіть особливості вашого приміщення </h4>
                        <textarea name="description" className="createform__textarea"></textarea>
                    </li>
                    <li className="createform__item">
                        <h4 className="cteateform__text">Завантажте фото</h4>
                        <p className="createform__image-text">Щоб розпочати, потрібно зробити 5 фотографій.
                            Згодом можна додати більше фото або внести необхідні зміни.
                        </p>
                        <input type="text" className="createform__input" name="image" placeholder="Посилання на фото" />
                    </li>
                     <li className="createform__item">
                        <h4 className="cteateform__text">Вкажіть ваш емейл для підтвердження</h4>
                        <input type="email" className="createform__input" name="email" placeholder="Введіть email" />
                    </li>
                     <button type="submit" className="createform__send">Підтвердити</button>
                </ul>
               </form>
            </Container>
        </section>
    )
}

export default CreateForm