import { ReactElement, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

import "./Menu.css";
import { CardComp } from "../Card";
import { Button, Toast } from "react-bootstrap";
import salad1 from "./../../assets/salad1.jpg";
import salad2 from "./../../assets/salad2.jpg";
import salad3 from "./../../assets/salad3.jpg";
import mainDish1 from "./../../assets/mainDish1.jpg";
import mainDish2 from "./../../assets/mainDish2.jpg";
import mainDish3 from "./../../assets/mainDish3.jpg";

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
        data: `${name}: салат - ${starter}, основное блюдо - ${mainDish}`,
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
          Предлагаем выбрать 1 вариант салата и 1 вариант основного блюда из
          предложенных ниже:
        </div>
        <div className="menu__text_title"> Салаты </div>
        <div className="menu__starter">
          <CardComp
            onChange={setStarter}
            img={salad1}
            title="Салат с форелью и томленой грушей"
            description="Салатные листья, маринованная форель, томленая груша, цитрусовый сыр, заправка из лайма и кленового сиропа, кедровый орех"
          />
          <CardComp
            onChange={setStarter}
            img={salad2}
            title="Салат с копченым цыпленком и горчичным сыром"
            description="Салатные листья, шпинатный айоли, томаты, горчичный сыр, филе копченого цыпленка, жареный лук, жареные семечки"
          />
          <CardComp
            onChange={setStarter}
            img={salad3}
            title="Теплый салат с пастрами"
            description="Замеченная говяжья грудинка, баклажаны, цукини, томаты, маринованный редис, салатные листья, кунжут, горчичная заправка"
          />
        </div>
        <div className="menu__text_title"> Основные блюда </div>
        <div className="menu__starter">
          <CardComp
            onChange={setMainDish}
            img={mainDish1}
            title="Цыпленок с гарниром из кукурузы и сыром бри"
            description="Грудка цыпленка на коже, сливочный сыр, кукуруза, миндаль, сливки, сыр бри"
          />
          <CardComp
            onChange={setMainDish}
            img={mainDish2}
            title="Телячьи щечки с картофелем черри и вешенками"
            description="Телячьи щечки, молодой картофель, вешенки, шпинат, соус демигляс"
          />
          <CardComp
            onChange={setMainDish}
            img={mainDish3}
            title="Буженина с картофельным пюре и грибным соусом"
            description="Свиная шея, картофель, масло, сливки, шампиньоны, белые грибы, французская горчица"
          />
        </div>

        <div className="menu__send"> Ваш выбор: </div>
        <div className="menu__send_text">Салат - {starter}</div>
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
