import { ReactElement } from "react";
import Container from "react-bootstrap/Container";

import "./Transport.css";

export const Transport = (): ReactElement => {
  return (
    <div id="transport" className="transport">
      <Container>
        <h2 className="transport__title">КАК ДОБРАТЬСЯ</h2>
        <div className="transport__text_center">Место: Вилла Vice House</div>
        <div className="transport__text">
          Адрес: Минская область, Дзержинский район, деревня Перхурово, улица
          Луговая, 25 (15-20 минут от Минска)
        </div>
        <div className="transport__text">
          Приезжайте к нам на своих авто (есть паркинг) или на такси.
        </div>
        <div className="transport__flex">
          <div>Геолокация:</div>
          <a
            className="transport__link"
            target="_blank"
            href="https://maps.app.goo.gl/QbpMstuGPmqYAh6W9?g_st=it"
          >
            https://maps.app.goo.gl...
          </a>
        </div>
      </Container>
    </div>
  );
};
