
const bcrypt = require("bcrypt");
const res = require("express/lib/response");
const Record = require("../models/record.js");

class Exchange {
    constructor() {

    }

    async createRecord(record) {
        return Record.create(record);
    }

    // async findAllRecords() {
    //     return Record.find();
    // }
    async findAllRecords(page, limit) {
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const results = {}

        if (endIndex < await Record.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
        try {
            results.results = await Record.find().limit(limit).skip(startIndex).exec()
            res.paginatedResults = results
        } catch (e) {
            res.status(500).json({ message: e.message })
        }
        return res.paginatedResults;
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