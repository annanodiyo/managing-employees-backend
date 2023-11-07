import { Request } from "express";

export interface loginEmployee extends Request {
  email: string;
  password: string;
}
