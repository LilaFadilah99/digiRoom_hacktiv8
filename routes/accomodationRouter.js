const router = require("express").Router();
const AccomodationController = require("../controllers/accomodationController");
const { authentication, authorizationAccomodation } = require("../middlewares/auth");

router.use(authentication);
router.get("/", AccomodationController.getAllAccomodation);
router.post("/add", AccomodationController.addAccomodation);
router.get("/:id", authorizationAccomodation, AccomodationController.getAccomodationById);
router.put("/update/:id", authorizationAccomodation, AccomodationController.updateAccomodation);
router.delete("/delete/:id", authorizationAccomodation, AccomodationController.deleteAccomodation);

module.exports = router;
