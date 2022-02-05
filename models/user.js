
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

    // name: {
    //     type: String,
    // },

    // lastName: {
    //     type: String,
    // },

    // nickName: {
    //     type: String,
    // },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    },
});

const toJSONConfig = {
    transform: (doc, ret, opt) => {
        delete ret['password']
        return ret
    }
}


userSchema.set('toJSON', toJSONConfig);

const User = mongoose.model("User", userSchema);
module.exports = User;