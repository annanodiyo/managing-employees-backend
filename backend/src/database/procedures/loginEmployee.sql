CREATE OR ALTER PROCEDURE LoginEmployee(@email varchar(200), @password varchar(200))
AS
BEGIN
select * from employees where email = @email
END
