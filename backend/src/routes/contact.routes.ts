import { Router } from "express";
import { createContactMessage, handleContactUpload } from "../controllers/contact.controller.js";

const router = Router();

router.post("/", handleContactUpload, createContactMessage);

export default router;
