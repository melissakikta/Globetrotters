import { Router } from "express";
import apiRoutes from "./api/index.js";

const router = Router();

// Mount API routes
router.use("/api", apiRoutes);

export default router;
