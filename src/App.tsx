//pages
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Calculator from "./pages/Calculator";

//routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Analysis", element: <Analysis /> },
  { path: "/Calculator", element: <Calculator /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
