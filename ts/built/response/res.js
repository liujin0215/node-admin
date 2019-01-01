"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var err_1 = require("./err");
var response = /** @class */ (function () {
    function response(code, data, err) {
        this.code = code;
        this.data = data;
        this.err = err;
    }
    return response;
}());
function successRes(res, data) {
    res.json(new response(0, data));
}
exports.successRes = successRes;
function failRes(res, code) {
    res.json(new response(code, null, err_1.errArr[code]));
}
exports.failRes = failRes;
