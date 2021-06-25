const db = require('./db');
const helper = require('./helpers');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM students LIMIT `+ offset + `,` + config.listPerPage
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(data){
    const result = await db.query(
      `INSERT INTO students (firstName, lastName, email, age, grade) 
      VALUES 
      ("`+ data.firstName + `", "` + data.lastName + `", "` +
        data.email + `", ` +
        data.age + `, ` +
        data.grade +`)`, 
    );
  
    let message = 'Error in creating students data';
  
    if (result.affectedRows) {
      message = 'Programming language created successfully';
    }
  return {message};
}
  
module.exports = {
    getMultiple,
    create
  }