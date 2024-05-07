import { dashboard, login } from "../controller/controller"
import {Router} from "express"

const router = Router();

router.route("/login").post(login);
router.route("/dashboard").get(dashboard);

export default router;