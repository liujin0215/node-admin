"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crud_1 = require("../../crud/crud");
var menu_1 = require("../model/menu");
var menuRouter = crud_1.newCrudRouter(menu_1.Menu, menu_1.fields);
exports.default = menuRouter;
