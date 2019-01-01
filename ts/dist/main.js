"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var menu_1 = require("./admin/api/menu");
var role_1 = require("./admin/api/role");
var adminuser_1 = require("./admin/api/adminuser");
var safety_1 = require("./admin/api/safety");
var app = express();
app.use(express.json());
app.get('/', function (req, res) {
    res.send('this is a test');
});
app.use('/menu', menu_1.default);
app.use('/role', role_1.default);
app.use('/adminuser', adminuser_1.default);
app.use('/safety', safety_1.default);
app.use(function (req, res) {
    console.log(req.body);
});
var server = app.listen(8000, "localhost", function () {
    console.log("服务器已启动, 地址是：http://localhost:8000");
});