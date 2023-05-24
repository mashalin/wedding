import { ReactElement } from "react";
import Container from "react-bootstrap/Container";

import "./DressCode.css";
import { CarouselComp } from "../Carousel";

import jokeOutFit1 from "./../../assets/jokeOutfit1.jpg";
import jokeOutFit2 from "./../../assets/jokeOutfit2.jpg";
import jokeOutFit3 from "./../../assets/jokeOutFit3.jpg";
import jokeOutFit4 from "./../../assets/jokeOutfit4.jpg";
import jokeOutFit5 from "./../../assets/jokeOutFit5.jpg";
import jokeOutFit6 from "./../../assets/jokeOutFit6.jpg";

import outFit1 from "./../../assets/outFit1.jpg";
import outFit2 from "./../../assets/outFit2.jpg";
import outFit3 from "./../../assets/outFit3.jpg";
import outFit4 from "./../../assets/outFit4.jpg";
import outFit5 from "./../../assets/outFit5.jpg";
import outFit6 from "./../../assets/outFit6.jpg";
import outFit7 from "./../../assets/outFit7.jpg";
import outFit8 from "./../../assets/outFit8.jpg";
import outFit9 from "./../../assets/outFit9.jpg";
import outFit10 from "./../../assets/outFit10.jpg";
import outFit11 from "./../../assets/outFit11.jpg";
import outFit12 from "./../../assets/outFit12.jpg";
import outFit13 from "./../../assets/outFit13.jpg";
import outFit14 from "./../../assets/outFit14.jpg";
import outFit15 from "./../../assets/outFit15.jpg";
import outFit16 from "./../../assets/outFit16.jpg";
import outFit17 from "./../../assets/outFit17.jpg";
import outFit18 from "./../../assets/outFit18.jpg";

export const DressCode = (): ReactElement => {
  return (
    <div id="dressCode" className="dress_code">
      <Container>
        <h2 className="dress_code__title">DRESS CODE</h2>
        <h4 className="dress_code__text">День первый:</h4>
        <div className="dress_code__text_center">
          Мы хотим, чтобы вы выглядели так:
        </div>
        <CarouselComp
          imgs={[
            jokeOutFit1,
            jokeOutFit2,
            jokeOutFit3,
            jokeOutFit4,
            jokeOutFit5,
            jokeOutFit6,
          ]}
        />
        <div className="dress_code__fun">
          Стоп! Отмена! Это был прикол, который придумал Коля…
        </div>

        <div className="dress_code__text_center">
          А теперь мы покажем, в каком стиле действительно будет проходить наша
          вечеринка:
        </div>
        <CarouselComp
          imgs={[
            outFit1,
            outFit2,
            outFit3,
            outFit4,
            outFit5,
            outFit6,
            outFit7,
            outFit8,
            outFit9,
            outFit10,
            outFit11,
            outFit12,
            outFit13,
            outFit14,
            outFit15,
            outFit16,
            outFit17,
            outFit18,
          ]}
        />

        <div className="dress_code__fun3">
          Если сомневаетесь, в чем приходить, выбирайте светлую и легкую одежду.
          Для нас важно, чтобы всем было удобно и не жарко (это август, детка! )
        </div>
        <div className="dress_code__ps dress_code_mr">
          P.S. Но мы будем рады вас увидеть и в образе из первой фотоподборки
          тоже!
        </div>
        <div className="horizontal-gradient"></div>
        <div className="dress_code__text dress_code__text_mr">День второй:</div>
        <div className="dress_code__fun2">
          Для дневной части не забудьте взять все необходимое для бани,
          бассейна, загара и отдыха на свежем воздухе.
        </div>
        <div className="dress_code__real">
          На наш вечерний Sensation советуем надеть что-то белое.
        </div>
      </Container>
    </div>
  );
};
