import express from "express";
import "dotenv/config";
import coursesRoute from "./routes/courses";
import cuisineRoute from "./routes/cuisines";
import path from "path";

const app = express();

app.use("/api/courses", coursesRoute);
app.use("/api/cuisines", cuisineRoute);

// Serve static assets in PRODUCTION
if (process.env.NODE_ENV === "production") {
	console.log("Serving static files...");
	// Set static folder
	app.use(express.static("src/public"));
	app.get("/", (req, res) => {
		res.sendFile(path.resolve(__dirname, "./public/index.html"));
	});
}

// Allow dev server to connect in DEVELOPMENT
if (process.env.NODE_ENV === "development") {
	// remove cors
	app.use("/", (req, res, next) => {
		res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		res.setHeader("Access-Control-Allow-Headers", "content-type");
		next();
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));
