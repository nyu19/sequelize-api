import express from "express";
import {UserRoutes} from '../routes/User.js';

const app = express();
app.use(express.json());
app.use("/api/users", UserRoutes);

export {app};