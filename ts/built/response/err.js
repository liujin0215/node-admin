"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var code;
(function (code) {
    code[code["success"] = 0] = "success";
    code[code["errCreate"] = 1] = "errCreate";
    code[code["errUpdate"] = 2] = "errUpdate";
    code[code["errRetrieve"] = 3] = "errRetrieve";
    code[code["errDelete"] = 4] = "errDelete";
    code[code["errPostValueEmpty"] = 5] = "errPostValueEmpty";
    code[code["errLogin"] = 6] = "errLogin";
    code[code["errLogout"] = 7] = "errLogout";
})(code = exports.code || (exports.code = {}));
exports.errArr = {
    1: '创建记录失败',
    2: '更新记录失败',
    3: '查询记录失败',
    4: '删除记录失败',
    5: '缺少必要字段',
    6: '登录失败',
    7: '登出失败',
};
