import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import pingRoute from "./Routes/pingRoute.js";
import authRoute from "./Routes/authRoute.js";


const app = express();
dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.Mongo_Url)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });

app.use(bodyParser.json());
app.use(cors());
app.use('/',pingRoute);
app.use('/auth',authRoute);
app.listen(process.env.PORT || 3000);
