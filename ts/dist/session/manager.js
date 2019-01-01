"use strict";

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = require("uuid");
var err_1 = require("./err");
var RedisSession = /** @class */function () {
    function RedisSession(rds, id, token) {
        this.rds = rds;
        this.id = id;
        this.token = token;
    }
    RedisSession.prototype.set = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2,, 3]);
                        return [4 /*yield*/, this.rds.setAsync(key, value)];
                    case 1:
                        return [2 /*return*/, _a.sent()];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_2)];
                    case 3:
                        return [2 /*return*/];
                }
            });
        });
    };
    RedisSession.prototype.get = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2,, 3]);
                        return [4 /*yield*/, this.rds.getAsync(key)];
                    case 1:
                        return [2 /*return*/, _a.sent()];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_3)];
                    case 3:
                        return [2 /*return*/];
                }
            });
        });
    };
    return RedisSession;
}();
var RedisSessionManager = /** @class */function () {
    function RedisSessionManager(rds, baseKey, ttl) {
        if (baseKey === void 0) {
            baseKey = 'session:';
        }
        if (ttl === void 0) {
            ttl = 86400;
        }
        this.rds = rds;
        this.baseKey = baseKey;
        this.ttl = ttl;
    }
    RedisSessionManager.prototype.newSession = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var token, key, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4,, 5]);
                        token = uuid.v4();
                        key = this.baseKey + id;
                        return [4 /*yield*/, this.rds.delAsync(key)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.rds.hsetAsync(key, 'token', token)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.rds.expireAsync(key, this.ttl)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, new RedisSession(this.rds, id, token)];
                    case 4:
                        err_4 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_4)];
                    case 5:
                        return [2 /*return*/];
                }
            });
        });
    };
    RedisSessionManager.prototype.getSession = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var token, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2,, 3]);
                        return [4 /*yield*/, this.rds.hgetAsync(this.baseKey + id, 'token')];
                    case 1:
                        token = _a.sent();
                        if (!token) {
                            return [2 /*return*/, Promise.reject(err_1.errNoSession)];
                        }
                        return [2 /*return*/, new RedisSession(this.rds, id, token)];
                    case 2:
                        err_5 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_5)];
                    case 3:
                        return [2 /*return*/];
                }
            });
        });
    };
    RedisSessionManager.prototype.expireSession = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2,, 3]);
                        return [4 /*yield*/, this.rds.expireAsync(this.baseKey + id, this.ttl)];
                    case 1:
                        return [2 /*return*/, _a.sent()];
                    case 2:
                        err_6 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_6)];
                    case 3:
                        return [2 /*return*/];
                }
            });
        });
    };
    RedisSessionManager.prototype.delSession = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2,, 3]);
                        return [4 /*yield*/, this.rds.delAsync(this.baseKey + id)];
                    case 1:
                        return [2 /*return*/, _a.sent()];
                    case 2:
                        err_7 = _a.sent();
                        return [2 /*return*/, Promise.reject(err_7)];
                    case 3:
                        return [2 /*return*/];
                }
            });
        });
    };
    return RedisSessionManager;
}();
exports.RedisSessionManager = RedisSessionManager;