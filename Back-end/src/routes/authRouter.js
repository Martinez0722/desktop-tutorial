import authController from "../controller/authController.js";
import express from "express";

const router = express.Router();

router.post("/register", authController.userRegister)
router.post("/login", authController.login)
router.delete("/delete", authController.userDelete)
router.put("/update", authController.userUpdate)
router.get("/get", authController.userGetAll)
router.get("/get/user", authController.userGet)


export default router;