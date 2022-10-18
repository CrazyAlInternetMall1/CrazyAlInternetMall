import fetch from "isomorphic-fetch";
import { API } from "../config";

// create new Cat
export const emailContactForm = (data) => {
  let emailendpoint = `${API}/contact`;

  return fetch(`${API}/blog`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
