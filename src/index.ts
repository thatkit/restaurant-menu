import express from "express";
import "dotenv/config";
import coursesRoute from "./routes/courses";
import cuisineRoute from "./routes/cuisines";

const app = express();

app.use("/", (req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	res.setHeader('Access-Control-Allow-Headers', 'content-type');
	next();
});

app.use("/api/courses", coursesRoute);
app.use("/api/cuisines", cuisineRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));
