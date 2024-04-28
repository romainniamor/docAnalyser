import NavBar from "../components/nav/NavBar";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="flex flex-col h-screen w-screen font-normal text-slate-800">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
