import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./pages/homePage/Home";
import Analyzer from "./pages/analyzerPage/Analyzer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/analyzer", element: <Analyzer /> },
    ],
  },
]);

function App() {
  return (
    <div className="flex flex-col h-screen w-screen font-normal text-slate-800">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
