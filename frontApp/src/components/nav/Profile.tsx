import { BsPersonCircle } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";

export default function Profile() {
  const { user } = useParams();
  return (
    <div className="flex gap-2 item-center">
      <div className="text-sm flex flex-col items-center ">
        <p>
          <span>Hello, </span>
          <span className="capitalize">{user}</span>
        </p>
        <Link to="/">
          <button className="text-xs text-gray-400 hover:text-blue-400  ">
            Log Out
          </button>
        </Link>
      </div>
      <div className="text-gray-400  flex justify-center items-center">
        <BsPersonCircle className="w-9 h-9" />
      </div>
    </div>
  );
}
