"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
require("dotenv/config");
var courses_1 = __importDefault(require("./routes/courses"));
var cuisines_1 = __importDefault(require("./routes/cuisines"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1["default"])();
// Serve static assets in PRODUCTION
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express_1["default"].static("client/dist"));
    app.get("*", function (req, res) {
        res.sendFile(path_1["default"].resolve(__dirname, "../client/dist/index.html"));
    });
}
// Allow dev server to connect in DEVELOPMENT
if (process.env.NODE_ENV === "development") {
    // remove cors
    app.use("/", function (req, res, next) {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        res.setHeader("Access-Control-Allow-Headers", "content-type");
        next();
    });
}
app.use("/api/courses", courses_1["default"]);
app.use("/api/cuisines", cuisines_1["default"]);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Listening on port: ".concat(PORT, "...")); });
//# sourceMappingURL=index.js.map