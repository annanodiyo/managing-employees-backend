CREATE TABLE Employees(
    employee_id VARCHAR(100) NOT NULL,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(300) NOT NULL,
    phone_no VARCHAR(20) NOT NULL,
    id_no INT NOT NULL,
    KRA_PIN VARCHAR(12) NOT NULL,
    NHIF_NO VARCHAR(15) NOT NULL,
    NSSF_NO VARCHAR(15) NOT NULL,
    password VARCHAR(200) NOT NULL,
    role VARCHAR(100) DEFAULT 'employee',
    welcomed BIT Default(0)
)
drop table Employees
select * from Employees
