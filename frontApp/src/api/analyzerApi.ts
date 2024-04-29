import axios from "axios";

const url: string = "http://localhost:8000/";

export const sendFile = (data) => {
  axios
    .post(`${url}upload-pdf`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log("response", res);
    })
    .catch((err) => {
      console.log("error", err.message);
    });
};
