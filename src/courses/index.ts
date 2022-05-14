import express from "express";
import multer from "multer";
import { createCourse } from "./controllers";
const router = express.Router();

export default router.post("/", multer().none(), createCourse);
