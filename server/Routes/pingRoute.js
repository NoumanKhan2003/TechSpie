import express from "express";

const pingRoute = express.Router();

pingRoute.get("/", (_, res) => {
    res.send("Pong!");
});

export default pingRoute;
