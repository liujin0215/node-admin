const errors = require('./err');
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

class retrieveForm {
    constructor(body, fields) {
        this.rawData = Object.assign({}, body);
        this.model = {};
        for (let key in this.rawData) {
            if (fields.indexOf(key) != -1) {
                this.model[key] = this.rawData[key];
            }
        }
    }

    getModel() {
        return this.model;
    }

    parseTime() {
        if (this.rawData.start && typeof (this.rawData.start) === 'number' && this.rawData.start > 0) {
            this.model.created = Object.assign({}, { [Op.gte]: this.rawData.start });
        }
        if (this.rawData.end && typeof (this.rawData.end) === 'number' && this.rawData.end > 0) {
            this.model.created = Object.assign(this.model.created ? (this.model.created) : {}, { [Op.lte]: this.rawData.end });
        }
    }

    getLimit() {
        if (!this.pagesize || typeof (this.pagesize) !== 'number' || this.pagesize <= 0 || this.pagesize > 30) {
            return 20;
        }

        return this.pagesize;
    }

    getOffset() {
        let pagenum = 1;
        if (this.pagenum && typeof (this.pagenum) === 'number' && this.pagenum > 1) {
            pagenum = this.pagenum;
        }

        return (pagenum - 1) * this.getLimit();
    }
}

exports.parseUpdateForm = async (body) => {
    if (!body || !body.id) {
        return Promise.reject(errors.errEmptyID);
    }
    let form = body;
    delete form.id;
    let where = { id: body.id };
    return form, where;
};

exports.parseRetrieveForm = (body, fields, parseTime) => {
    let form = new retrieveForm(body, fields);
    if (parseTime) {
        form.parseTime();
    }
    return form;
};