import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav className="w-screen py-3 px-5 bg-white border-b shadow-lg flex gap-5 items-center">
      <Logo />
    </nav>
  );
}
