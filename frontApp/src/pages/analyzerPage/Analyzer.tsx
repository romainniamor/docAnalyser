import { MdFileUpload } from "react-icons/md";
import Button from "../../components/reusableUi/Button";
import { GrPowerReset } from "react-icons/gr";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function Analyzer() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileInfo, setFileInfo] = useState<File | null>(null as File | null);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);

  //will be removed
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/");
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setFileInfo({
      fileName: file.name,
    });
    sendFile();
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const sendFile = () => {
    if (!fileInfo) {
      return;
    }
    axios
      .post("url", { file: fileInfo })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[660px]  flex flex-col mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full b py-2 px-5 border-b shadow-md flex justify-between">
          <div className="flex items-center gap-2">
            <input
              ref={fileInputRef}
              id="fileInput"
              className="hidden"
              name="pdfFile"
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
            />

            <label htmlFor="fileInput">
              <Button
                label="Upload File"
                icon={<MdFileUpload />}
                onClick={handleButtonClick}
              />
            </label>
            {fileInfo && (
              <p className="text-sm text-gray-500">{fileInfo.fileName}</p>
            )}
          </div>
          <button
            className="text-xl text-gray-600"
            onClick={() => setFileInfo(null)}
          >
            <GrPowerReset />
          </button>
        </div>
        <div className="flex-1 bg-gradient-to-b from-transparent to-red-200">
          <div className="w-full h-[600px] overflow-y-scroll flex flex-col gap-4 p-4">
            <div className="flex justify-end">
              <p className="px-5 py-3 rounded-xl shadow-sm max-w-md bg-white">
                Hi there, i'm your personal assistant and a very fast reader,
                upload a pdf doc and let see what i can do for you!
              </p>
            </div>

            <div className="flex justify-start">
              <p className="px-5 py-3 rounded-xl shadow-sm max-w-md bg-white">
                Hi there, i'm your personal assistant and a very fast reader,
                upload a pdf doc and let see what i can do for you!
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center  py-4">
            <form
              onSubmit={() => {
                console.log("submit");
              }}
              className="flex gap-2 w-5/6 py-3 px-4 border border-blue-200 bg-white rounded-3xl shadow-sm "
            >
              <input
                disabled={""}
                type="text"
                placeholder="Your message..."
                name="user_request"
                value={""}
                onChange={() => {}}
                className="flex-1 focus:outline-none "
              />
              <Button label="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
