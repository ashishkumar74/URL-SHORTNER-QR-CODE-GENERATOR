
export const cookieOptions = {
    httpOnly: true,
    secure: true, // Always true for production HTTPS
    sameSite: "None", // Required for cross-origin requests
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
}