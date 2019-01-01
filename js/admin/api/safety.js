const { AdminUser } = require('../model/adminuser');
const { successRes, failRes } = require('../../response/res');
const { code } = require('../../response/err');
const RedisSessionManager = require('../../session/session');
const express = require('express');

const router = express.Router();

router.post('/login', async (req, res, next) => {
    try {
        let user = await AdminUser.findOne({name:req.body.name, password:req.body.password});
        let session = await RedisSessionManager.newSession(user.id);
        successRes(res, {id:user.id, token:session.token});
    } catch (err) {
        failRes(res, code.errLogin);
    }
    next();
});

router.post('/logout', async (req, res, next) => {
    try {
        let id = req.header('AppID');
        let token = req.header('Token');
        if (!id || !token) {
            res.sendStatus(404);
        }
        let session = await RedisSessionManager.getSession(id);
        if (session.token != token) {
            res.sendStatus(404);
        }
        await RedisSessionManager.delSession(id);
        successRes(res, {id:id, token:token});
    } catch (err) {
        failRes(res, code.errLogin);
    }
    next();
});

module.exports = router;