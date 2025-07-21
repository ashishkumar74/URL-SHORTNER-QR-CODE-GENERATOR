import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import PrivacyPolicy from "../pages/PrivacyPolicy"; // adjust path if needed

export const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: PrivacyPolicy,
});
