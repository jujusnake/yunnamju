import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { routes } from "./routes";

const router = createBrowserRouter([
  {
    path: "/*",
    Component: Layout,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
  { path: "*", Component: Root },
]);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
