import express from "express";
import dotenv from  'dotenv';
import cors from 'cors';
import connectDB from "./db/db.js";

//config env
dotenv.config();

connectDB();

const app = express();

app.use(cors()); //CORS middleware
app.use(express.json());

const PORT = process.env.PORT || 8070;

app.get('/', (req, res) => {
        res.send("Welcome to the API");
    }
)
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});