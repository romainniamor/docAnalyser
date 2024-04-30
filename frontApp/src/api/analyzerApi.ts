import axios from "axios";

const url: string = "http://localhost:8000/";

export const sendFile = async (data) => {
  try {
    const response = await axios.post(`${url}upload-pdf`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendRequest = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/user-request",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
