const router = require("express").Router();
const UserController = require("../controllers/userController");
const { authentication } = require("../middlewares/auth");

router.post("/register", UserController.userRegister);
router.post("/login", UserController.userLogin);
router.get("/", UserController.getAllUser);
router.get("/:id", authentication, UserController.getUserById);
router.put("/update/:id", UserController.updateUserData);
router.delete("/delete/:id", UserController.deleteUser);

module.exports = router;
