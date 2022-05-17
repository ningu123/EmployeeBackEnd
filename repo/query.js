


var getEmployeeDetails = "select * from employee";

var insertEmployee = "insert into employee(empid,empname,email, created_on,department,password)values($1,$2,$3,$4,$5,$6) RETURNING *";
var updating = "update employee set empname=$2,email=$3,created_on=$4,department=$5,password=$6 where empid=$1 RETURNING *";
var deleting = "delete from employee where empid=$1 RETURNING *";
var counting =  "select count(*) from employee where department='dev' ";


module.exports = {
    getEmployeeDetails,
    insertEmployee,
    updating,
    deleting,
    counting,
}