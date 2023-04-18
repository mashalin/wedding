import { ReactElement } from "react";
import Container from "react-bootstrap/Container";

import "./AndAlso.css";
import heart from "./../../assets/hearts (1).png";

export const AndAlso = (): ReactElement => {
  return (
    <div id="andAlso" className="andAlso">
      <Container>
        <h2 className="andAlso__title">А ЕЩЁ...</h2>
        <div className="andAlso__text2">
          Если вы захотите подарить нам букет, то предлагаем не мучить цветы
          дорогой и жарой, а заменить их бутылочкой любого приятного напитка,
          которым мы сможем насладиться вместе во время наших будущих встреч!
        </div>
        <div className="andAlso__flex">
          <div className="andAlso__text">
            Очень ждём вас на нашем празднике!
          </div>
          <img className="andAlso__img" src={heart} alt="" />
        </div>
      </Container>
    </div>
  );
};
