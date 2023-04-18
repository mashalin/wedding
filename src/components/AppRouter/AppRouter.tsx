import { Routes, Route, Navigate } from "react-router-dom";
import { Admin, Main } from "../../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route key={"/"} path={"/"} element={<Main />} />
      <Route key={"/admin"} path={"/admin"} element={<Admin />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
