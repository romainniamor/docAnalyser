import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./pages/homePage/Home";
import Analyzer from "./pages/analyzerPage/Analyzer";
import History from "./pages/historyPage/History";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/analyzer", element: <Analyzer /> },
      { path: "/history", element: <History /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
