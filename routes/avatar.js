import express from "express";
import { MakeAvatar } from '../controllers/Avatar.js';
const AvatarRouter = express.Router();

AvatarRouter.get("/", MakeAvatar)

export {AvatarRouter}