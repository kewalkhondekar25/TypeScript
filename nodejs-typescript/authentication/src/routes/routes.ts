import authMiddleware from "../middlewares/auth.middleware";
import { dashboard, login } from "../controller/controller"
import {Router} from "express"

const router = Router();

router.route("/login").post(login);
router.route("/dashboard").get(authMiddleware, dashboard);

export default router;