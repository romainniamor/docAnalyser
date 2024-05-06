import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${user}/home`);
    setUser("");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setUser(value);
  };
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-transparent to-red-300 flex justify-center items-center">
      <div className="w-[350px] flex flex-col gap-6 bg-white rounded-lg shadow-lg overflow-hidden p-8 pb-12">
        <div className="">
          <h1 className="text-4xl font-semibold">Ask your Pdf 📚</h1>
          <p className="text-gray-600 text-l">Use a interactive chatbot</p>
        </div>
        <AuthForm
          placeholder="Your Login..."
          value={user}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
