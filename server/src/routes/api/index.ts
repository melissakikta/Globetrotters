import { Router } from "express";
import currencyRoutes from "./currencyRoutes.js";

const router = Router();

// Mount currency exchange routes
router.use("/currency", currencyRoutes);

export default router;
