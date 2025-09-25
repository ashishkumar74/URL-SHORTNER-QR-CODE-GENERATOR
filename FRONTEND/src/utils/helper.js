import { redirect } from "@tanstack/react-router";
import { getCurrentUser } from "../api/user.api";
import { login } from "../store/slice/authSlice";

export const checkAuth = async ({ context }) => {
    try {
        const { queryClient, store } = context;
        
        // First check if user is already authenticated in store
        const currentState = store.getState().auth;
        if (currentState.isAuthenticated && currentState.user) {
            return true;
        }
        
        // If not authenticated in store, try to fetch user from API
        const user = await getCurrentUser();
        
        if (user && user.user) {
            store.dispatch(login(user.user));
            return true;
        }
        
        // If no user found, redirect to auth with a message
        throw new Error("Please login to access the dashboard");
        
    } catch (error) {
        console.log("Authentication required:", error.message);
        // Redirect to auth page
        return redirect({ 
            to: "/auth",
            search: { mode: "login" }
        });
    }
};