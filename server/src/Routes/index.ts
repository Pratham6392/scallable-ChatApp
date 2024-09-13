import { Router } from "express";
const router = Router();
import AuthController from "../Controllers/authController.js"
import ChatGroupController from "../Controllers/chatGroupController.js";
import authMiddleware from "../middleswares/AuthMiddleware.js"
import ChatGroupUserController from "../Controllers/ChatGroupUserController.js";
import ChatsController from "../Controllers/ChatsController.js";



// Auth Routes
router.post("/auth/login", AuthController.login);

// Chat Group Routes
router.get("/chat-group", authMiddleware, ChatGroupController.index);
router.get("/chat-group/:id", ChatGroupController.show);
router.post("/chat-group", authMiddleware, ChatGroupController.store);
router.put("/chat-group/:id", authMiddleware, ChatGroupController.update);
router.delete("/chat-group/:id", authMiddleware, ChatGroupController.destroy);

// Chat Group User Routes
router.get("/chat-group-user", ChatGroupUserController.index);
router.post("/chat-group-user", ChatGroupUserController.store);

// Chat Routes
router.get("/chats/:groupId", ChatsController.index);


export default router;
