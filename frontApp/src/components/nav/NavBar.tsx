import Logo from "./Logo";
import NavItem from "./NavItem";
import { navLinks } from "./navEnums";

export default function NavBar() {
  return (
    <nav className="w-full py-3 px-5 bg-white border-b shadow-lg flex gap-5 items-center">
      <Logo />
      <div className="flex ml-10 gap-3">
        {navLinks.map((navLink, index) => (
          <NavItem
            key={index}
            label={navLink.label}
            to={navLink.to}
            hasSteaker={navLink.hasSteaker}
          />
        ))}
      </div>
    </nav>
  );
}
