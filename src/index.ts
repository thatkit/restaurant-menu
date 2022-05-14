import express from "express";
import "dotenv/config";
import coursesRoute from "./routes/courses";
import cuisineRoute from "./routes/cuisines";

const app = express();

app.use("/courses", coursesRoute);
app.use("/cuisines", cuisineRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));
