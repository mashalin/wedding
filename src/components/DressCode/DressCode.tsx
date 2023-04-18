import { ReactElement } from "react";
import Container from "react-bootstrap/Container";

import "./DressCode.css";
import { CarouselComp } from "../Carousel";
import bird from "./../../assets/bird.png";

export const DressCode = (): ReactElement => {
  return (
    <div id="dressCode" className="dress_code">
      <Container>
        <h2 className="dress_code__title">DRESS CODE</h2>
        <div className="dress_code__text">День первый:</div>
        <div className="dress_code__text_center">
          Мы хотим, чтобы вы выглядели так:
        </div>
        <CarouselComp />
        <div className="dress_code__fun">
          Стоп! Отмена! Это был прикол, который придумал Коля…
        </div>
        <div className="hr">
          <img className="hr_img" src={bird} alt="" />
          <img className="hr_img" src={bird} alt="" />
          <img className="hr_img" src={bird} alt="" />
        </div>
        <div className="dress_code__text_center">
          А теперь мы покажем, в каком стиле действительно будет проходить наша
          вечеринка:
        </div>
        <CarouselComp />
        <div className="dress_code__fun">
          Если сомневаетесь, в чем приходить, выбирайте светлую и легкую одежду.
          Для нас важно, чтобы всем было удобно и не жарко (это август, детка! )
        </div>
        <div className="dress_code__ps dress_code_mr">
          P.S. Но мы будем рады вас увидеть и в образе из первой фотоподборки
          тоже!
        </div>
        <div className="dress_code__ps">Но это не точно….</div>
        <div className="horizontal-gradient"></div>
        <div className="dress_code__text">День второй:</div>
        <div className="dress_code__fun2">
          Для дневной части не забудьте взять все необходимое для бани,
          бассейна, загара и отдыха на свежем воздухе.
        </div>
        <div className="dress_code__ps dress_code_mr">
          На наш вечерний Sensation советуем надеть что-то белое.
        </div>
      </Container>
    </div>
  );
};
