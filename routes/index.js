const router = require("express").Router();
const userRouter = require("./userRouter");
const accomodationRouter = require("./accomodationRouter");
const { application } = require("express");

router.use("/user", userRouter);
router.use("/accomodation", accomodationRouter);

module.exports = router;
