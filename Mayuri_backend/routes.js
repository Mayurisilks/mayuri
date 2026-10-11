import express from "express";

import demo from "./controller.js";
const router = express.Router();

router.get("/demodata", demo); 


export default router;