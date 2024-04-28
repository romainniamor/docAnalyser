import NavBar from "../components/nav/NavBar";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen w-screen font-normal text-slate-800 items-center">
      <NavBar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}
