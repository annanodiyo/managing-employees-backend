-- use Employee_management;
CREATE OR ALTER PROCEDURE registerEmployee(
    @employee_id VARCHAR (100),
    @name VARCHAR(200),
    @email VARCHAR(300),
    @phone_no VARCHAR(20),
    @id_no INT,
    @KRA_PIN VARCHAR(12),
    @NHIF_NO VARCHAR(15),
    @NSSF_NO VARCHAR(15),
    @password VARCHAR(200)
    -- @welcomed BIT Default(0)not stored because default is stored to 0
)
AS
BEGIN

INSERT INTO Employees
(employee_id,name,email,phone_no,id_no,KRA_PIN,NHIF_NO,NSSF_NO,password)
VALUES(@employee_id,@name,@email,@phone_no,@id_no,@KRA_PIN,@NHIF_NO,@NSSF_NO,@password)

END
select * from Employees

DROP PROCEDURE registerEmployee
