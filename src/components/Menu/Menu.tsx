import { ReactElement, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

import "./Menu.css";
import { CardComp } from "../Card";
import { Button, Toast } from "react-bootstrap";

export const Menu = (): ReactElement => {
  const [starter, setStarter] = useState("");
  const [mainDish, setMainDish] = useState("");
  const [name, setName] = useState("");
  const [toastText, setToastText] = useState("");
  const [toastShow, setToastShow] = useState(false);
  const [toastVariant, setToastVariant] = useState("success");

  const send = async (): Promise<void> => {
    if (!starter) {
      setToastText("Пожалуйста, выберите стартер");
      setToastVariant("warning");
      setToastShow(true);
      return;
    }

    if (!mainDish) {
      setToastText("Пожалуйста, выберите главное блюдо");
      setToastVariant("warning");
      setToastShow(true);
      return;
    }

    if (!name) {
      setToastText("Пожалуйста, введите своё имя и фамилию");
      setToastVariant("warning");
      setToastShow(true);
      return;
    }

    try {
      await axios.post(process.env.REACT_APP_API_URL!, {
        data: `${name}: стартер - ${starter}, основное блюдо - ${mainDish}`,
      });
      setToastText("Ваши данные успешно отправлены!");
      setToastVariant("success");
      setToastShow(true);
    } catch (e) {
      throw e;
    }
    return;
  };

  return (
    <div id="menu" className="menu">
      <Container>
        <h2 className="menu__title">Меню</h2>
        <div className="menu__text">
          Предлагаем выбрать 1 вариант стартера и 1 вариант основного блюда из
          предложенных ниже:
        </div>
        <div className="menu__text_title"> Стартер </div>
        <div className="menu__starter">
          <CardComp
            onChange={setStarter}
            img="https://klike.net/uploads/posts/2019-06/1559545617_2.jpg"
            title="Стартер1"
            description="Описание"
          />
          <CardComp
            onChange={setStarter}
            img="https://klike.net/uploads/posts/2019-06/1559545617_2.jpg"
            title="Стартер2"
            description="Описание"
          />
          <CardComp
            onChange={setStarter}
            img="https://klike.net/uploads/posts/2019-06/1559545617_2.jpg"
            title="Стартер3"
            description="Описание"
          />
        </div>
        <div className="menu__text_title"> Основное блюдо </div>
        <div className="menu__starter">
          <CardComp
            onChange={setMainDish}
            img="https://klike.net/uploads/posts/2019-06/1559545617_2.jpg"
            title="Основное блюдо1"
            description="Описание"
          />
          <CardComp
            onChange={setMainDish}
            img="https://klike.net/uploads/posts/2019-06/1559545617_2.jpg"
            title="Основное блюдо2"
            description="Описание"
          />
          <CardComp
            onChange={setMainDish}
            img="https://klike.net/uploads/posts/2019-06/1559545617_2.jpg"
            title="Основное блюдо3"
            description="Описание"
          />
        </div>

        <div className="menu__send"> Ваш выбор: </div>
        <div className="menu__send_text">Стартер - {starter}</div>
        <div className="menu__send_text">Основное блюдо - {mainDish}</div>
        <div className="menu__send_input">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Введите ваше имя и фамилию..."
          />
        </div>
        <Button onClick={send} className="menu__button" variant="warning">
          Отправить
        </Button>
        <Toast
          className="menu__toast"
          bg={toastVariant}
          show={toastShow}
          onClose={() => setToastShow(false)}
        >
          <Toast.Header></Toast.Header>
          <Toast.Body>{toastText}</Toast.Body>
        </Toast>
      </Container>
    </div>
  );
};
