import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Home from "./pages/homePage/Home";
import Analyzer from "./pages/analyzerPage/Analyzer";
import History from "./pages/historyPage/History";
import LoginPage from "./pages/loginPage/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/:user",
    element: <MainPage />,
    children: [
      { path: "home", element: <Home /> },
      { path: "analyzer", element: <Analyzer /> },
      { path: "history", element: <History /> },
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
