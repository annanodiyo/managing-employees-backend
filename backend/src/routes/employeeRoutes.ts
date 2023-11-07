import { Router } from "express";
import {
  LoginEmployee,
  registerEmployee,
} from "../controllers/employeesControllers";

const employee_router = Router();
employee_router.post("/register", registerEmployee);
employee_router.post("/login", LoginEmployee);

export default employee_router;
