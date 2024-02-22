import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Layout from "./Layout";
import Works from "./pages/Works";
import Contacts from "./pages/Contacts";

const router = createBrowserRouter([
  {
    path: "/*",
    Component: Layout,
    children: [
      { index: true, Component: Welcome },
      { path: "about", Component: About },
      { path: "works", Component: Works },
      { path: "contacts", Component: Contacts },
    ],
  },
  { path: "*", Component: Root },
]);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
