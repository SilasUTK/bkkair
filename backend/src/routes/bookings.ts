import { Router } from "express";
import { checkBooking, createBooking, getBookingByCode } from "../controllers/bookingController.js";

const router = Router();

router.post("/", createBooking);
router.get("/check/:bookingCode", checkBooking);
router.get("/:code", getBookingByCode);

export default router;
