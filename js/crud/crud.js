const express = require('express');
const { code } = require('../response/err');
const { successRes, failRes } = require('../response/res');
const { parseUpdateForm, parseRetrieveForm } = require('../request/form');
const errors = require('../request/err');

module.exports = (model, fields, router) => {
    if (!router) {
        router = express.Router();
    }

    router.post('/create', async (req, res, next) => {
        try {
            let ret = await model.create(req.body);
            successRes(res, ret);
        } catch (err) {
            failRes(res, code.errCreate);
        }
        next();
    });

    router.post('/retrieve', async (req, res, next) => {
        try {
            let form = parseRetrieveForm(req.body, fields, true);
            let ret = await model.findAndCountAll({
                where: form.getModel(),
                limit: form.getLimit(),
                offset: form.getOffset()
            });
            successRes(res, ret);
        } catch (err) {
            console.log(err);
            failRes(res, code.errRetrieve);
        }
        next();
    });

    router.post('/update', async (req, res, next) => {
        try {
            let form, where = await parseUpdateForm(req.body);
            let ret = await model.update(form, {
                where: where
            });
            successRes(res, ret);
        } catch (err) {
            let errCode;
            switch (err) {
            case errors.errEmptyID:
                errCode = code.errPostValueEmpty;
                break;
            default:
                errCode = code.errUpdate;
            }
            failRes(res, errCode);
        }
        next();
    });

    router.post('/delete', async (req, res, next) => {
        try {
            let ret = await model.destroy(req.body);
            successRes(res, ret);
        } catch (err) {
            failRes(res, code.errCreate);
        }
        next();
    });

    return router;
};