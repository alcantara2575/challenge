const db = require('./db');
const helper = require('./helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const [countQuery] = await db.query(`SELECT count(id) FROM students`);
  const rows = await db.query(`SELECT * FROM students LIMIT `+ offset + `,` + config.listPerPage);
  const data = helper.emptyOrRows(rows);
  const countData = countQuery[`count(id)`];
  const meta = {
    page, 
    countData
  };

  return {
    data,
    meta
  }
}

async function getData(id){

    const result = await db.query(`SELECT * FROM students WHERE id=` + id);
    let message = 'There are not data for id '+id;
  
    if (result.length > 0)
        return result;
    else  
        return {message};
  }

async function create(data){
    const result = await db.query(
      `INSERT INTO students (firstName, lastName, email, age, grade) 
      VALUES 
      ("`+ data.firstName + `", "` + data.lastName + `", "` +
        data.email + `", ` +
        data.age + `, "` +
        data.grade +`")`, 
    );
  
    let message = 'Error in creating students data';
  
    if (result.affectedRows)
      message = 'New data created successfully';

  return {message};
}

async function update(id, data){
    const result = await db.query(
        `UPDATE students 
        SET 
        firstName="`+ data.firstName + `",
        LastName="`+ data.lastName +`",
        email="`+ data.email +`",
        age=` + data.age + `,
        grade="` + data.grade + 
        `" WHERE id = `+ id  
    );
  
    let message = 'Error updating info';
  
    if (result.affectedRows)
      message = 'Student updated successfully';

  return {message};
}

async function remove(id){
    const result = await db.query(`DELETE FROM students WHERE id=` + id);
    let message = 'Error in deleting data';
  
    if (result.affectedRows) 
      message = 'Student data deleted successfully';
  
    return {message};
  }
  
module.exports = {
    getMultiple,
    getData,
    create,
    update,
    remove
  }