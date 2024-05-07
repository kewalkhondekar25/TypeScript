import { login } from "../controller/controller"
import {Router} from "express"

const router = Router();

router.route("/login").post(login)

export default router;