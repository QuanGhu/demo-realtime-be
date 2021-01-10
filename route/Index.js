const router     = require('express').Router(),
       userRouter = require('./User');

router.use('/user', userRouter)

module.exports = router;