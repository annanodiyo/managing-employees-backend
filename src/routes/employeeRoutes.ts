import { Router } from "express";
import { registerEmployee } from "../controllers/employeesControllers";

const employee_router = Router();
employee_router.post("/register", registerEmployee);

export default employee_router;
