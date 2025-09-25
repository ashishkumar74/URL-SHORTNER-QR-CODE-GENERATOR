/*import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv"
dotenv.config("./.env")
import short_url from "./src/routes/short_url.route.js";
import connectDB from "./src/config/monogo.config.js";
import urlSchema from "./src/models/short_url.model.js";
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/create", short_url)

app.get("/:id", redirectFromShortUrl)

app.use(errorHandler)

app.listen(5000,()=>{
    connectDB()
    console.log("Server is running on http://localhost:5000");
})
***
*/

import express from "express";
import { nanoid } from "nanoid"
import dotenv from "dotenv"
import connectDB from "./src/config/mongo.config.js"
import short_url from "./src/routes/short_url.route.js"
import user_routes from "./src/routes/user.routes.js"
import auth_routes from "./src/routes/auth.routes.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors"
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser"

dotenv.config("./.env")

const app = express();

app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:3000',  
        'https://url-shortnerandqr-code-generator.netlify.app'
    ], 
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(attachUser)

// Health check route
app.get("/", (req, res) => {
    res.json({ status: "OK", message: "URL Shortener API is running" });
});

app.get("/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.use("/api/user", user_routes)
app.use("/api/auth", auth_routes)
app.use("/api/create", short_url)
app.get("/:id", redirectFromShortUrl)

app.use(errorHandler)

// Start server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        // Connect to database first
        await connectDB();
        
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();

// GET - Redirection 
