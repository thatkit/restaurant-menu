"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var fakeAuth_1 = require("../../middleware/fakeAuth");
var stringToInt_1 = require("../../middleware/stringToInt");
var controllers_1 = require("./controllers");
var router = express_1["default"].Router();
exports["default"] = router.post("/", (0, multer_1["default"])().none(), fakeAuth_1.fakeAuth, stringToInt_1.stringToInt, controllers_1.createCourse);
//# sourceMappingURL=index.js.map