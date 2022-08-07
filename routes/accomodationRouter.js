const router = require("express").Router();
const AccomodationController = require("../controllers/accomodationController");

router.get("/", AccomodationController.getAllAccomodation);
router.post("/add", AccomodationController.addAccomodation);
router.get("/:id", AccomodationController.getAccomodationById);
router.put("/update/:id", AccomodationController.updateAccomodation);
router.delete("/delete/:id", AccomodationController.deleteAccomodation);

module.exports = router;
