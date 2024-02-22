import { createRef } from "react";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Works from "./pages/Works";

export const routes = [
  { path: "/", element: <Welcome />, nodeRef: createRef() },
  { path: "about", element: <About />, nodeRef: createRef() },
  { path: "works", element: <Works />, nodeRef: createRef() },
  { path: "contacts", element: <Contacts />, nodeRef: createRef() },
];
