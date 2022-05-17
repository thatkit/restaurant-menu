"use strict";
exports.__esModule = true;
exports.stringToInt = void 0;
var stringToInt = function (req, res, next) {
    req.body.price = +req.body.price;
    var energy = req.body.energy;
    if (energy) {
        energy = {
            kcal: +energy.kcal,
            prots: +energy.prots,
            carbs: +energy.carbs,
            fats: +energy.fats
        };
        req.body.energy = energy;
    }
    next();
};
exports.stringToInt = stringToInt;
//# sourceMappingURL=stringToInt.js.map