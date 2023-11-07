import { Request, Response } from "express";
import mssql from "mssql";
import { sqlConfig } from "../config/sqlconfig";
import { v4 } from "uuid";
import bcrypt from "bcrypt";
import { loginEmployee } from "../interfaces/employee";
export const registerEmployee = async (req: Request, res: Response) => {
  try {
    let {
      name,
      email,
      phone_no,
      id_no,
      KRA_PIN,
      NHIF_NO,
      NSSF_NO,
      password,
      welcomed,
    } = req.body;

    const pool = await mssql.connect(sqlConfig);
    await pool.request();
    const hashedPwd = await bcrypt.hash(password, 5);

    let employee_id = v4();

    let results = await pool
      .request()
      //method chainning
      .input("employee_id", mssql.VarChar, employee_id)
      .input("name", mssql.VarChar, name)
      .input("email", mssql.VarChar, email)
      .input("phone_no", mssql.VarChar, phone_no)
      .input("id_no", mssql.Int, id_no)
      .input("KRA_PIN", mssql.VarChar, KRA_PIN)
      .input("NHIF_NO", mssql.VarChar, NHIF_NO)
      .input("NSSF_NO", mssql.VarChar, NSSF_NO)
      .input("password", mssql.VarChar, hashedPwd)
      //procedure to pass form procedures
      .execute("registerEmployee");
    console.log(results);

    return res.status(200).json({
      message: "Employee Registered successfully",
    });

    // let results = await pool.request().input("");
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

//introducing middlewares
export const LoginEmployee = async (req: Request, res: Response) => {
  try {
    //check if user exists in the system
    const { email, password } = req.body;
    const pool = await mssql.connect(sqlConfig);
    let user = (
      await pool
        .request()
        .input("email", email)
        .input("password", password)
        .execute("LoginEmployee")
    ).recordset;
    console.log(user);
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};
