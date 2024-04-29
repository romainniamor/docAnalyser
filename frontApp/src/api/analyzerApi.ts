import axios, { AxiosResponse } from "axios";

const url: string = "http://localhost:8000/";

// will be removed
export const getData = async (): Promise<void> => {
  try {
    const response: AxiosResponse<string> = await axios.get(url);
    const data: any = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// post data file to backend for treatment
export const sendFile = async (file: File): Promise<void> => {
  try {
    const formData: FormData = new FormData();
    formData.append("file", file);

    const response: AxiosResponse<string> = await axios.post(
      `${url}upload-pdf`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("response", response);
  } catch (error) {
    console.log("error", error.message);
  }
};
