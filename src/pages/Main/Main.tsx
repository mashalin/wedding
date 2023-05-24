import { ReactElement } from "react";

import {
  AndAlso,
  DressCode,
  EventProgram,
  Header,
  Home,
  Menu,
  Transport,
} from "../../components";

export const Main = (): ReactElement => {
  return (
    <>
      <Header />
      <Home />
      <EventProgram />
      <DressCode />
      <Menu />
      <Transport />
      <AndAlso />
    </>
  );
};
