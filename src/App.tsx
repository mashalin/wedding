import { ReactElement } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AppRouter } from "./components";
import { BrowserRouter } from "react-router-dom";

export const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
