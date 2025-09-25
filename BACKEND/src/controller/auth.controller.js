import { cookieOptions } from "../config/config.js"
import { loginUser, registerUser } from "../services/auth.service.js"
import wrapAsync from "../utils/tryCatchWrapper.js"


export const register_user = wrapAsync( async (req, res) => {
    console.log("Register request received:", req.body);
    
    const {name, email, password} = req.body
    
    if (!name || !email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }
    
    const {token,user} = await registerUser(name, email, password)
    req.user = user
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({message:"register success", user})
})

export const login_user = wrapAsync( async (req, res) => {
    console.log("Login request received:", req.body);
    
    const {email, password} = req.body
    
    if (!email || !password) {
        return res.status(400).json({message: "Email and password are required"});
    }
    
    const {token,user} = await loginUser(email, password)
    req.user = user
    res.cookie("accessToken", token, cookieOptions)
    res.status(200).json({user:user,message:"login success"})
})

export const logout_user = wrapAsync( async (req, res) => {
    res.clearCookie("accessToken", cookieOptions)
    res.status(200).json({message:"logout success"})
})

export const get_current_user = wrapAsync( async (req, res) => {
    res.status(200).json({user:req.user})
})