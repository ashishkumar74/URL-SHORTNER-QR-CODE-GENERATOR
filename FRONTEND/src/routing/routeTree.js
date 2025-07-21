import { createRootRoute } from "@tanstack/react-router"
import RootLayout from "../RootLayout"

import { homePageRoute } from "./homepage"
import { authRoute } from "./auth.route"
import { dashboardRoute } from "./dashboard"
import { helpRoute } from "./help.route"
import { contactRoute } from "./contact.route"
import { privacyRoute } from "./privacy.route"
import { shortenRoute } from "./shorten.route"

export const rootRoute = createRootRoute({
    component: RootLayout,
})

export const routeTree =rootRoute.addChildren([
    homePageRoute, 
    authRoute, 
    dashboardRoute,
    helpRoute,
    contactRoute,
    privacyRoute,
    shortenRoute,
]);

