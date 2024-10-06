import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;

app.use(express.json()); //to parse request body to json object 
app.use(cookieParser()); //cookie parser middleware

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
    connectMongoDB();
});
