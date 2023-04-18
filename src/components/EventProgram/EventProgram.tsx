import { ReactElement } from "react";
import Container from "react-bootstrap/Container";

import "./EventProgram.css";

export const EventProgram = (): ReactElement => {
  return (
    <div id="eventProgram" className="event_program">
      <Container>
        <h2 className="event_program__title">ПРОГРАММА МЕРОПРИЯТИЯ</h2>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </Container>
    </div>
  );
};
