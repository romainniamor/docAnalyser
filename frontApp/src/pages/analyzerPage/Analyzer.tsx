import { MdFileUpload } from "react-icons/md";
import PrimaryButton from "../../components/reusableUi/PrimaryButton";
import { GrPowerReset } from "react-icons/gr";
import { useState, useRef, useEffect } from "react";
import { sendFile, sendRequest } from "../../api/analyzerApi";

import LogoButton from "../../components/reusableUi/LogoButton";
import Loader from "../../components/reusableUi/Loader";
import Conversation from "./Conversation";

export default function Analyzer() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileInfo, setFileInfo] = useState<File | null>(null as File | null);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [userRequest, setUserRequest] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const containerRef = useRef(null);

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

  const handleInputType = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (e) => {
    setUserRequest(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_request", userRequest);
    setIsLoading(true);
    setUserRequest("");

    try {
      const data = await sendRequest(formData);
      const conversation = data.conversation;
      const lastMessages = conversation[conversation.length - 1];
      setMessages([...messages, lastMessages]);
      setIsLoading(false);
      setUserRequest("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = () => {
    setFileInfo(null);
    setIsUploaded(false);
    setUserRequest("");
    setMessages([]);
  };

  const scrollToBottom = () => {
    if (!containerRef.current) {
      return;
    }
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

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
              <PrimaryButton
                label="Upload File"
                icon={<MdFileUpload />}
                onClick={handleInputType}
              />
            </label>
            {fileInfo && (
              <p className="text-sm text-gray-500">{fileInfo.fileName}</p>
            )}
          </div>
          <LogoButton icon={<GrPowerReset />} onClick={handleReset} />
        </div>
        <div className="flex-1 bg-gradient-to-b from-transparent to-red-200">
          <div
            ref={containerRef}
            className="w-full h-[600px] overflow-y-scroll flex flex-col gap-3 p-4 "
          >
            {messages.map((message, index) => (
              <Conversation key={index} message={message} />
            ))}

            {isLoading && <Loader />}
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
                name="user_request"
                placeholder="Your message..."
                value={userRequest}
                onChange={handleChange}
                className="flex-1 focus:outline-none "
              />
              <PrimaryButton label="Send" disabled={!isUploaded} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
