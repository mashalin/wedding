import { ReactElement } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./Carousel.css";
import photo from "./../../assets/photo.jpg";
import gold from "./../../assets/gold.png";
import leaf from "./../../assets/leaf.png";

export const CarouselComp = (): ReactElement => {
  return (
    <Carousel variant="dark" className="carousel">
      <Carousel.Item interval={3000}>
        <img
          className="d-block carousel_img"
          src="https://s00.yaplakal.com/pics/pics_original/5/0/6/17827605.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block carousel_img"
          src="https://kartinkof.club/uploads/posts/2022-07/1659174092_2-kartinkof-club-p-krasivie-kartinki-dlya-dushi-i-nastroeniya-2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block carousel_img"
          src="https://pibig.info/uploads/posts/2022-06/1655671236_1-pibig-info-p-detskie-kartinki-pro-leto-krasivo-1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
