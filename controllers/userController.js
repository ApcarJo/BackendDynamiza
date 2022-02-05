
const bcrypt = require("bcrypt");
const User = require("../models/user.js");


class Trader {
    constructor() {

    }

    async createUser(user) {
        user.password = await bcrypt.hash(user.password, 10);
        return User.create(user);
    }

    async findAllUsers() {
        return User.find();
    }

    async findById(id) {
        return User.findOne(
            { _id: id }
        )
    }

    // async modifyUser(body) {

    //     return User.findByIdAndUpdate({ _id: body.user_id },
    //         {
    //             name: body.name,
    //             lastName: body.lastName,
    //             nickName: body.nickName,
    //             address: body.address,
    //             country: body.country,
    //             email: body.email,
    //             phone: body.phone,
    //         },
    //         { new: true, omitUndefined: true }
    //     )
    // }

    async modifyPassword(body) {

        let user = await User.findById(body.user_id);

        let oldPassword = body.oldPassword;

        let password = user.password;

        let verify = await bcrypt.compare(oldPassword, password);

        if (!verify) {
            throw new Error('Wrong user or password');
        }

        let newPassword = await bcrypt.hash(body.newPassword, 10);

        return Client.findByIdAndUpdate(
            { _id: body.user_id },
            { password: newPassword })

    }

    async deleteUser(id) {
        return User.findByIdAndDelete(
            { _id: id },
        )
    }
}

let userController = new Trader();
module.exports = userController;