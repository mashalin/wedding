import { ReactElement } from "react";
import Container from "react-bootstrap/Container";

import "./Footer.css";

export const Footer = (): ReactElement => {
  return (
    <div className="footer">
      <Container className="footer_cont">
        <div className="footer__text">2023</div>
      </Container>
    </div>
  );
};
