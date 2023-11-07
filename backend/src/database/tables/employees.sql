CREATE TABLE Employees(
    employee_id VARCHAR(100) NOT NULL unique,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(300) NOT NULL unique,
    phone_no VARCHAR(20) NOT NULL unique,
    id_no INT NOT NULL unique,
    KRA_PIN VARCHAR(12) NOT NULL unique,
    NHIF_NO VARCHAR(15) NOT NULL unique,
    NSSF_NO VARCHAR(15) NOT NULL unique,
    password VARCHAR(200) NOT NULL,
    role VARCHAR(100) DEFAULT 'employee',
    welcomed BIT Default(0)
)
drop table Employees
select * from Employees
