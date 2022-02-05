
const router = require("express").Router();
const userController = require("../controllers/userController.js");
const authUser = require("../middleware/authUser.js");

router.post("/",  async(req, res) => {
    try {
        const data = req.body;
        res.json(await userController.createUser(data));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get("/", async(req, res) => {
    try {
        res.json(await userController.findAllUsers());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post("/getUser", authUser, async(req, res) => {
    try {
        const id = req.body.user_id;
        res.json(await userController.findById(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.put("/modifyPassword", authUser, async(req, res) => {
    try {
        const body = req.body;
        res.json(await userController.modifyPassword(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.delete("/", authUser, async(req, res) => {
    try {
        const id = req.body.user_id;
        res.json(await userController.deleteUser(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;