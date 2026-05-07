import { Router } from "express";
import { loginAdmin, logoutAdmin, meAdmin } from "../controllers/adminAuthController.js";
import { requireAdminAuth } from "../middleware/requireAdminAuth.js";

const router = Router();

router.post("/auth/login", loginAdmin);
router.post("/auth/logout", logoutAdmin);
router.get("/auth/me", requireAdminAuth, meAdmin);

export default router;
