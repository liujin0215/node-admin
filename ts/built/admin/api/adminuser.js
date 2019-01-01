"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crud_1 = require("../../crud/crud");
var adminuser_1 = require("../model/adminuser");
var adminuserRouter = crud_1.newCrudRouter(adminuser_1.AdminUser, adminuser_1.fields);
exports.default = adminuserRouter;
