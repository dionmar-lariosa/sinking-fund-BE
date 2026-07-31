import { Router } from "express";
import controller from "../controllers/member.controller.js";

const router = Router();

router.get("/", controller.members);
// router.get("/:id", controller.member);
// router.post("/", controller.newMember);
// router.put("/:id", controller.updateMember);
// router.delete("/:id", controller.removeMember);

export default router;
