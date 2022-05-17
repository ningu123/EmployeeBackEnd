const dbConnection = require('./database');
const dbQuery = require('./query');
// const { body } = require("express-validator");




const gettingEmployeeDetails = async () => {
    /* db  connection */
     try {
         /* inserting query here */
         const getQuery = await dbConnection.query(dbQuery.getEmployeeDetails, [
         ]);
         return getQuery.rows;
     }
     catch (error) {
         console.log("Erro occured in getting employee repo");
         console.log(error);
         console.log("**************");
         console.log(error.code)
         throw new Error(error.code);
     } 
 };

 const insertEmployee = async (body) => { 
     console.log(body);
    const client = await dbConnection.connect();
     try{
        const insertion = await client.query(dbQuery.insertEmployee , [
            body.empid,
            body.empname,
            body.email,
            body.created_on,
            body.department,
            body.password
        ]);
        return insertion.rows[0];
     }catch(error) {
        console.log("Erro occured in insert Employee repo");
        console.log(error);
        console.log("**************");
        console.log(error.code)
        throw new Error(error.code);
    } finally{
        client.release();
    } 
 };

const updateEmployee = async (body) =>{
    const client = await dbConnection.connect();
    try{
        const updating = await client.query(dbQuery.updating,[
            body.empid,
            body.empname,
            body.email,
            body.created_on,
            body.department,
            body.password   
        ]);
        return updating.rows[0];
       
    }catch(error) {
        console.log("Erro occured in updating Employee repo");
        console.log(error);
        console.log("**************");
        console.log(error.code)
        throw new Error(error.code);
    } finally{
        client.release();
    }
}

const deleteTheEmployee = async (id)=>{
    const answer = await dbConnection.connect();
    try{
        const deleted = await answer.query(dbQuery.deleting,[id]);
        return deleted.rows[0];
    }catch(error) {
        console.log("Erro occured in delete Employee repo");
        console.log(error);
        console.log("**************");
        console.log(error.code)
        throw new Error(error.code);
    } finally{
        answer.release();
    }
}

const countEmployees= async () =>{
    const answer = await dbConnection.connect();
    try{
        const countingEmployee = await answer.query(dbQuery.counting,[]);
        console.log(countingEmployee.rows);
        return countingEmployee.rows;
    }catch(error) {
        console.log("Erro occured to counting Employees in repo");
        console.log(error);
        console.log("**************");
        console.log(error.code)
        throw new Error(error.code);
    } finally{
        answer.release();
    }
}
 module.exports = {
    gettingEmployeeDetails,
    insertEmployee,
    updateEmployee,
    deleteTheEmployee,
    countEmployees,

 }

