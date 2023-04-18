import { ReactElement } from "react";

import "./Main.css";
import {
  AndAlso,
  DressCode,
  EventProgram,
  Footer,
  Header,
  Home,
  Menu,
  Transport,
} from "../../components";
import gold from "../../assets/gold4.png";

export const Main = (): ReactElement => {
  return (
    <>
      <img className="gold" src={gold} alt="" />
      <Header />
      <Home />
      <EventProgram />
      <DressCode />
      <Menu />
      <Transport />
      <AndAlso />
      <Footer />
    </>
  );
};
