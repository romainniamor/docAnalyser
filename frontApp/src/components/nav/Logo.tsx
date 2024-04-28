import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <Link to="/">
      <img
        src={logo}
        className="bg-transparent h-9 w-9"
        alt="logo-doc-analyzer"
      />
    </Link>
  );
}
