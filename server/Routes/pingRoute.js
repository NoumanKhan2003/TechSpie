import express from "express";

const pingRoute = express.Router();

pingRoute.get("/", (req, res) => {
    res.send("Pong!");
});

export default pingRoute;
