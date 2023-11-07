import express, { NextFunction, Request, Response, json } from "express";
// import dotenv from "dotenv";
import { testConnection } from "./config/sqlconfig";
import employee_router from "./routes/employeeRoutes";

const app = express();
//define data that you are passing are in json format
app.use(json());
app.use("/employee", employee_router);
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: error.message,
  });
});
app.listen(4700, () => {
  // dotenv.config();
  console.log("server is running on port 4700");
  testConnection();
  // console.log(process.env.DB_NAME);
});
