import { Router } from "express";
import AuthController from "../controllers/authController";
import authenticateJWT from "../middleWares/authMiddleWare";

const router = Router();

router.post("/register", AuthController.registerAuthUser);
router.post("/login", AuthController.loginAuthUser);

export default router;
