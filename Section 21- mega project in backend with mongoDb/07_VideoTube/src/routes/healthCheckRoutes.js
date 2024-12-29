import {Router } from "express"
import { healthCheck } from "../controllers/healthCheck.js"

//route we are testing is api/v1/healthcheck/test
const router = Router()
router.route("/").get(healthCheck)
router.route("/test").get(healthCheck)

export default router