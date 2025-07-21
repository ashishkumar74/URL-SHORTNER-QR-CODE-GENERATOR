import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import HelpCenter from "../pages/HelpCenter"; // ✅ default export used

export const helpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/help",
  component: HelpCenter,
});
