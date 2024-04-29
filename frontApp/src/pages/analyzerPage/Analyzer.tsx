import { MdFileUpload } from "react-icons/md";
import Button from "../../components/reusableUi/Button";
import { GrPowerReset } from "react-icons/gr";
import { useState, useRef } from "react";
import { sendFile } from "../../api/analyzerApi";
import DialogueBox from "./DialogueBox";

export default function Analyzer() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileInfo, setFileInfo] = useState<File | null>(null as File | null);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [userRequest, setUserRequest] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]; // Récupération du fichier sélectionné
    if (file) {
      setFileInfo({
        fileName: file.name,
      });
    }
    const formData = new FormData();
    formData.append("file", file); // Ajout du fichier à formData

    sendFile(formData);
    setIsUploaded(true);
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (e) => {
    setUserRequest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit");
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
            <DialogueBox
              content="Hi there, i'm your personal assistant and a very fast reader,
                upload a pdf doc and let see what i can do for you!"
              position={"justify-end"}
            />
          </div>
          <div className="flex justify-center items-center  py-4">
            <form
              onSubmit={handleSubmit}
              className={`flex gap-2 w-5/6 py-3 px-4 border border-blue-200 bg-white rounded-3xl shadow-sm  ${
                !isUploaded && "opacity-50"
              }`}
            >
              <input
                disabled={!isUploaded}
                type="text"
                placeholder="Your message..."
                name="user_request"
                value={userRequest}
                onChange={handleChange}
                className="flex-1 focus:outline-none "
              />
              <Button label="Send" disable={!isUploaded} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
