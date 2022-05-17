"use strict";
exports.__esModule = true;
exports.fakeAuth = void 0;
var fakeAuth = function (req, res, next) {
    req.body.restaurantId = "3b4e6680-b0e2-4cba-b52c-9850524c9598";
    next();
};
exports.fakeAuth = fakeAuth;
//# sourceMappingURL=fakeAuth.js.map