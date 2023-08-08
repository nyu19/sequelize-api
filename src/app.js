import express from "express";
import {UserRoutes} from '../routes/User.js';
import { AvatarRouter } from "../routes/avatar.js";

const app = express();
app.use(express.json());
app.use("/api/users", UserRoutes);
app.use("/api/avatar", AvatarRouter)

export {app};