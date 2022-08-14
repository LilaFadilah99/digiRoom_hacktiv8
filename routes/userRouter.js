const router = require("express").Router();
const UserController = require("../controllers/userController");
const { authentication, authorization, authorizationOnlyAdmin } = require("../middlewares/auth");

router.post("/register", UserController.userRegister);
router.post("/login", UserController.userLogin);
router.use(authentication);
router.get("/", authorizationOnlyAdmin, UserController.getAllUser);
router.get("/:id", authorization, UserController.getUserById);
router.put("/update/:id", authorization, UserController.updateUserData);
router.delete("/delete/:id", authorization, UserController.deleteUser);

module.exports = router;
