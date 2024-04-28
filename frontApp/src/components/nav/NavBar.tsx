import Logo from "./Logo";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full py-3 px-5 bg-white border-b shadow-lg flex gap-5 items-center">
      <Logo />
      <div className="flex ml-10 gap-3">
        <NavLink
          to="/analyzer"
          className={({ isActive }) => {
            return `${
              isActive ? "font-semibold" : ""
            }  hover:font-semibold transition-all duration-300 ease-in-out`;
          }}
        >
          DocAnalyzer
        </NavLink>
      </div>
    </nav>
  );
}
