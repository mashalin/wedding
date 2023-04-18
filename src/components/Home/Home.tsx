import { ReactElement } from "react";
import { Container } from "react-bootstrap";

import "./Home.css";

export const Home = (): ReactElement => {
  return (
    <div id="home" className="preview">
      <Container>
        <div className="title">
          <h1 className="title__names">Саша & Коля</h1>
          <div className="title__text">14 - 16 августа 2023 г</div>
          <div className="title__text title__invite">
            Приглашаем на нашу свадебную вечеринку!
          </div>
        </div>
        <div className="photo" />
      </Container>
    </div>
  );
};
