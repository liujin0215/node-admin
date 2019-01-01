"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var crud_1 = require("../../crud/crud");
var role_1 = require("../model/role");
var roleRouter = crud_1.newCrudRouter(role_1.Role, role_1.fields);
exports.default = roleRouter;