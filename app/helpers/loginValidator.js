import axios from "axios";
import { useState } from "react";


const [login, setLogin] = useState(false);

export function loginValidator(username, password) {
  const server = "http://192.168.178.60:3000";
  axios.post(server + "/auth/login", {
    username: username,
    password: password,
  })
    .then((response) => {
      if (response.data.message == "Erfolgreich eingeloggt.") {
        console.log("Succes");
        setLogin(true);
      } else {
        console.log("No");
        setLogin(false);
      }
    })
    .catch((error) => {
      console.log(error);
      setLogin(false);
    });
    return login;
}