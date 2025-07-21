import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import Contact from "../pages/Contact"; // or your actual path

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
