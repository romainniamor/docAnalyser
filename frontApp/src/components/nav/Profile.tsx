import { BsPersonCircle } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";

export default function Profile() {
  const { user } = useParams();
  return (
    <div className="flex gap-2 item-center">
      <div className=" flex flex-col justify-center items-center leading-4">
        <p className="font-medium">
          <span>Hello, </span>
          <span className="capitalize">{user}</span>
        </p>
        <Link to="/">
          <button className="text-sm text-gray-400   ">Log Out</button>
        </Link>
      </div>
      <div className="text-gray-200  flex justify-center items-center">
        <BsPersonCircle className="w-9 h-9" />
      </div>
    </div>
  );
}
