import { ReactElement } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./Carousel.css";

interface ICarouselCompProps {
  imgs: string[];
}

export const CarouselComp = ({ imgs }: ICarouselCompProps): ReactElement => {
  return (
    <Carousel variant="dark" className="carousel">
      {imgs.map((img) => (
        <Carousel.Item key={img} interval={3000}>
          <img className="d-block carousel_img" src={img} alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
