## Install and serve

This API was deployed with [express.js](https://expressjs.com/). For serve, download proyect and execute:

    npm install
    node app.js

App start serve at [http://localhost:3080](http://localhost:3080), it was deployed using **Node** *v16.3.0* and **MySQL** *mysql-server v8.0.25*. Table used have this data structure.

| Field     | Type        | Null | Key | Default | Extra          |
| --------- | ----------- | ---- | --- | ------- | -------------- |
| id        | int         | NO   | PRI | NULL    | auto_increment |
| firstName | varchar(40) | NO   |     | NULL    |                |
| lastName  | varchar(40) | NO   |     | NULL    |                |
| email     | varchar(80) | NO   |     | NULL    |                |
| age       | tinyint     | NO   |     | NULL    |                |
| grade     | varchar(5)  | NO   |     | NULL    |                |

&nbsp;

## Response
It response only to addresses in table below, it does with json data or message with info about request.

| Address                     | GET | POST | PUT | DELETE |
| --------------------------- | --- | ---- | --- | ------ |
| localhost:3080              |  X  |      |     |        |
| localhost:3080/students     |  X  |   X  |     |        |
| localhost:3080/students/:id |  X  |      |  X  |    X   |

&nbsp;

### GET
* In root address **/** a message that say if server is running.
* In **/students** return all data in students table, paginated every 5 elements.
* In **/students/:id** return all data about element with id.

### POST
* Is used for create data for a new student.
* In request body should by all data for new entry.

### PUT 
* Used for update data for a existed student.
* In request body should insert all updated data.

### DELETE
* Used for remove all entry of a student with specific id.

