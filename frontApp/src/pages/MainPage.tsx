import NavBar from "../components/nav/NavBar";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 p-5">
        <Outlet />
      </main>
    </>
  );
}
