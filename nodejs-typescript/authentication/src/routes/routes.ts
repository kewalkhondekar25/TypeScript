import { login } from "../controller/controller"
import {Router} from "express"

const router = Router();

router.route("/login").get(login)

export default router;