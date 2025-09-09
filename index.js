import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // 🔹 Must be here before routes
app.use(express.urlencoded({ extended: true })); // Optional: for form data

app.use("/api", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
