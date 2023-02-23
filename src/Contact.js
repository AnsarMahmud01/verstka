import React, { useState } from "react";
import "./Contact.css";
import Inputname from "./Input";

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="profile">
                <h1 id="main-head">Профиль</h1>
                <Inputname name="Mahmud Ansar" id="active" />
                <Inputname name="flyans.mah@gmail.com" />
                <Inputname place="Новый пароль" type="password" />
                <Inputname place="Подтвердить пароль" type="password" />
                <button onClick={toggleModal} className="btn-modal">
                    Отправить
                </button>
            </div>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <Inputname id="modal-input" name="Mahmud Ansar" />
                        <Inputname id="modal-input" place="Ваш e-mail" />
                        <Inputname id="modal-input" place="Текстовое поле" />
                        <button onClick={toggleModal} className="btn-modal">
                            Отправить
                        </button>
                        <div id="info">
                            <p>e-mail: info@mywebsite.ru</p>
                            <p> тел: +7 778 198 6539</p>
                        </div>
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}