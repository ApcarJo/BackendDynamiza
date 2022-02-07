
const router = require("express").Router();
const recordController = require("../controllers/recordController.js");
const authUser = require("../middleware/authUser.js");

router.post("/", authUser, async (req, res) => {
    try {
        const data = req.body;
        res.json(await recordController.createRecord(data));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});


router.get("/get", async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        res.json(await recordController.findAllRecords(page, limit));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post("/order", async (req, res) => {
    try {
        const id = req.body.order_id;
        res.json(await recordController.findByOrderId(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post("/type", async (req, res) => {
    try {
        const type = req.body.type;
        res.json(await recordController.findByType(type));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post("/", authUser, async (req, res) => {
    try {
        const body = req.body;
        res.json(await recordController.updateRecord(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.delete("/", authUser, async (req, res) => {
    try {
        const id = req.body.order_id;
        res.json(await recordController.deleteRecord(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});


module.exports = router;