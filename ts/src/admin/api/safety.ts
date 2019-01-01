import express = require("express");
import { AdminUser } from "../model/adminuser";
import { successRes, failRes } from "../../response/res";
import sessionManger from "../../session/session";
import { code } from "../../response/err";

const safetyRouter = express.Router();
export default safetyRouter;

safetyRouter.post('/login', async (req, res, next) => {
    try {
        let user = await AdminUser.findOne({
            where: {
                name: req.body.name,
                password: req.body.password
            }
        }) as any;
        let session = await sessionManger.newSession(user.id);
        successRes(res, { id: user.id, token: session.token });
    } catch (err) {
        failRes(res, code.errLogin);
    }
    next();
});

safetyRouter.post('/logout', async (req, res, next) => {
    try {
        let id = req.header('AppID');
        let token = req.header('Token');
        if (!id || !token) {
            res.sendStatus(404);
        }
        let session = await sessionManger.getSession(id);
        if (session.token != token) {
            res.sendStatus(404);
        }
        await sessionManger.delSession(id);
        successRes(res, {id:id, token:token});
    } catch (err) {
        failRes(res, code.errLogin);
    }
    next();
});
