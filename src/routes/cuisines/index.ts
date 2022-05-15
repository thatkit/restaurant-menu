import express from "express";
import { createCuisine, findAllCuisines } from "./controllers";
const router = express.Router();

router.use(express.json());

router.post("/", createCuisine);
router.get("/", findAllCuisines);

export default router;
