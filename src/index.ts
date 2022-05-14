import express from "express";
import "dotenv/config";
import coursesRoute from "./services/courses";

const app = express();

app.use("/courses", coursesRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));
