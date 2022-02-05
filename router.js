
const router = require('express').Router();

const recordRouter = require('./routes/recordRouter.js');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');

router.use('/record', recordRouter);
router.use('/login', loginRouter);
router.use('/user', userRouter);

module.exports = router;