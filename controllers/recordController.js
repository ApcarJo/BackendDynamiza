
const bcrypt = require("bcrypt");
const Record = require("../models/record.js");
const User = require("../models/user.js");

class Exchange {
    constructor() {

    }

    async createRecord(record) {
        return Record.create(record);
    }

    async findAllRecords() {
        return Record.find();
    }

    async findByOrderId(id) {
        return Record.findOne({ _id: id })
    }
    async findByType(type) {
        return Record.find({ type: type })
    }
    async findByStatus(status) {
        return Record.find({ status: status })
    }

    async updateRecord(body) {
        return Record.findByIdAndUpdate(
            { _id: body.id },
            {
                country: body.country,
                type: body.type,
                company_name: body.company_name,
                status: body.status,
                ship_date: body.date,
            },
            { new: true, omitUndefined: true }
        )
    }

    async deleteRecord(id) {
        return Record.findByIdAndDelete(
            { _id: id },
        )
    }
}

let recordController = new Exchange();
module.exports = recordController;