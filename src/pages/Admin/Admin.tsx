import { ReactElement, useState } from "react";
import { Button, Toast } from "react-bootstrap";
import axios from "axios";
import { saveAs } from "file-saver";

import "./Admin.css";

export const Admin = (): ReactElement => {
  const [toastShow, setToastShow] = useState(false);
  const [password, setPassword] = useState("");

  const download = async () => {
    try {
      if (password !== "adminPass333") {
        setToastShow(true);
        return;
      }
      const res = await axios.get(process.env.REACT_APP_API_URL!, {
        responseType: "blob",
      });
      const file = new Blob([res.data], { type: "application/txt" });

      saveAs(file, "file.txt");
    } catch (e) {
      throw e;
    }
  };

  return (
    <>
      <div className="admin__header">
        <div className="admin__title">Admin</div>
      </div>
      <div className="admin__input">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Введите пароль..."
        />
      </div>
      <Button onClick={download} className="admin__button" variant="warning">
        Загрузить файл
      </Button>
      <Toast
        className="admin__toast"
        bg={"danger"}
        show={toastShow}
        onClose={() => setToastShow(false)}
      >
        <Toast.Header></Toast.Header>
        <Toast.Body>Неправильный пароль</Toast.Body>
      </Toast>
    </>
  );
};
