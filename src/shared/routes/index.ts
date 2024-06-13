import { Router } from "express";
import { ForecastController } from "../controllers";

const router = Router();

router.get("/forecast/:country", ForecastController.get);

export { router };
