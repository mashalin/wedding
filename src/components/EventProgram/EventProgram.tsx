import { ReactElement } from "react";
import Container from "react-bootstrap/Container";

import "./EventProgram.css";

export const EventProgram = (): ReactElement => {
  return (
    <div id="eventProgram" className="event_program">
      <Container>
        <h2 className="event_program__title">ПРОГРАММА МЕРОПРИЯТИЯ</h2>
        <div className="event_program__block">
          <h4 className="event_program__block__title">1 ДЕНЬ</h4>
          <div className="event_program__block__flex">
            <div className="event_program__block__flex__time">15.30</div>
            <div>-</div>
            <div className="event_program__block__flex__text">
              встречаемся в назначенном месте (указано ниже)
            </div>
          </div>
          <div className="event_program__block__flex">
            <div className="event_program__block__flex__time">16.20</div>
            <div>-</div>
            <div className="event_program__block__flex__text">
              плачем и смеемся на церемонии
            </div>
          </div>
          <div className="event_program__block__flex">
            <div className="event_program__block__flex__time">17.00</div>
            <div>-</div>
            <div className="event_program__block__flex__text">
              празднуем до утра!
            </div>
          </div>
        </div>

        <div className="event_program__block">
          <h4 className="event_program__block__title">2 ДЕНЬ</h4>
          <div className="event_program__block__flex">
            <div className="event_program__block__flex__time">
              11.00 - 12.00
            </div>
            <div>-</div>
            <div className="event_program__block__flex__text">
              поздний завтрак
            </div>
          </div>
        </div>

        <div className="event_program__text-container">
          <div className="event_program__text">
            Далее в течение дня планируем баню, бассейн, кальяны от Александра
            Рудича, плов от Романа Роговцева, конкурсы от Алексея Пешкова, танцы
            от Юлии Манько и шуточки за 300 от Никиты Мороза.
          </div>

          <div className="event_program__text">
            Также на вилле при должном старании можно будет отыскать качели,
            батуты, аэрохоккей, кикер, бильярд, настольный теннис, x-box,
            караоке и пьяненького Павла Шкарубо...
          </div>

          <div className="event_program__text">
            Ночью вечеринка и огненные dj-сеты от приглашенных знаменитых
            литовских диджеев! :)
          </div>
        </div>
      </Container>
    </div>
  );
};
