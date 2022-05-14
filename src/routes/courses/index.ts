import express from "express";
import multer from "multer";
import { fakeAuth } from "../../middleware/fakeAuth";
import { stringToInt } from "../../middleware/stringToInt";
import { createCourse } from "./controllers";
const router = express.Router();

export default router.post(
	"/",
	multer().none(),
	fakeAuth,
	stringToInt,
	createCourse
);
