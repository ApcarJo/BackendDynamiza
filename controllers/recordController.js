
const bcrypt = require("bcrypt");
const Transaction = require("../models/record.js");
const User = require("../models/user.js");

class Exchange {
    constructor() {

    }

    async createRecord(transaction) {
        return Transaction.create(transaction);
    }

    async findAllRecords() {
        return Transaction.find();
    }

    async findByOrderId(id) {
        return Transaction.findOne({ _id: id })
    }
    async findByType(type) {
        return Transaction.find({ type: type })
    }
    async findByStatus(status) {
        return Transaction.find({ status: status })
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

let transactionController = new Exchange();
module.exports = transactionController;