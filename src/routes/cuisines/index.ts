import express from "express";
import { createCuisine } from "./controllers";
const router = express.Router();

export default router.post("/", express.json(), createCuisine);
