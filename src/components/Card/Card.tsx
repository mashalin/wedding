import { ReactElement } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Card.css";

interface ICardCompProps {
  img: string;
  title: string;
  description: string;
  onChange: (value: string) => void;
}

export const CardComp = ({
  img,
  title,
  description,
  onChange,
}: ICardCompProps): ReactElement => {
  return (
    <div className="cart__cont">
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img className="card__img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="card__title">{title}</Card.Title>
          <Card.Text className="card__text">Состав:</Card.Text>
          <Card.Text className="card__sostav">{description}</Card.Text>
          <Button className="card__button" onClick={() => onChange(title)} variant="primary">
            Выбрать
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
