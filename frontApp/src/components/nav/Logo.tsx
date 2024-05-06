import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <Link to="home">
      <img
        src={logo}
        className="bg-transparent h-10 w-10"
        alt="logo-doc-analyzer"
      />
    </Link>
  );
}
