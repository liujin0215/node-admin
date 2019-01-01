const { errArr } = require('./err');

class response {
    constructor(code, data) {
        this.code = code;
        if (code === 0) {
            this.data = data;
        } else {
            this.err = data;
        }
    }
}

exports.successRes = (res, data) => {
    //return Promise.reject('异常测试');
    res.json(new response(0, data));
};

exports.failRes = (res, code) => {
    res.json(new response(code, errArr[code]));
};