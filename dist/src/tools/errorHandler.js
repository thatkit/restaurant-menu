"use strict";
exports.__esModule = true;
exports.errorHandler = exports.serverError = void 0;
exports.serverError = { message: "Server error", code: 500 };
var errorHandler = function (err) {
    console.log(err);
    return exports.serverError;
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map