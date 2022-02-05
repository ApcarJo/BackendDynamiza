
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({

    country: {
        type: String,
        required: true
    },

    ship_date: {
        type: Date,
        required: true
    },

    company_name: { 
        type: String, 
        required: true 
    },

    status: {
        type: String,
        default: 'Pending',
    },

    type: {
        type: String,
        required: true
    },

    user_id: {
        type: String,
        required: true,
    }


});

const Record = mongoose.model("Record", recordSchema);
module.exports = Record;
