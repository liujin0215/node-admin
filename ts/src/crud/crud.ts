import express = require("express");
import { Router } from "express";
import { successRes, failRes } from "../response/res";
import { code } from "../response/err";


export function newCrudRouter(model: any, fields: string[], router?: Router): Router {
    if (!router) {
        router = express.Router()
    }

    router.post('/create', async (req, res, next) => {
        try {
            let ret = await model.create(req.body);
            successRes(res, ret);
        } catch (err) {
            console.log(err)
            failRes(res, code.errCreate);
        }
        next();
    });

    return router
}
