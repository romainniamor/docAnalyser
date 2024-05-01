import { NavLink } from "react-router-dom";
import Sticker from "./Sticker";
import { NavLinkType } from "../../types/types";

type NavItemProps = NavLinkType;

export default function NavItem({ label, to, hasSteaker }: NavItemProps) {
  return (
    <div className="relative">
      {hasSteaker && <Sticker />}

      <NavLink
        to={to}
        className={({ isActive }) => {
          return `${
            isActive ? "text-red-600 " : ""
          }   hover:text-red-500 font-semibold transition-all duration-300 ease-in-out`;
        }}
      >
        {label}
      </NavLink>
    </div>
  );
}
