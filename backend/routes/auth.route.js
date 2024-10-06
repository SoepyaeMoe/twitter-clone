import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/api/login", login);
router.post("/api/logout", logout);
router.post("/api/register", register);


export default router;