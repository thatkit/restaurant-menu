"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var controllers_1 = require("./controllers");
var router = express_1["default"].Router();
router.use(express_1["default"].json());
router.post("/", controllers_1.createCuisine);
router.get("/", controllers_1.findAllCuisines);
exports["default"] = router;
//# sourceMappingURL=index.js.map