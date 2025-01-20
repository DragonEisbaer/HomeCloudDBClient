import axios from "axios";
import { useState } from "react";

export function loginValidator(username, password) {
  const server = "http://192.168.178.60:3000";
  axios
    .post(server + "/auth/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      if (response.data.message == "Erfolgreich eingeloggt.") return true;
      else return false;
    })
    .catch((error) => {
      console.log(error);
    });
  return false;
}
