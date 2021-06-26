const express = require('express');
const studentsDataRouter = require('./services/routes');

const app = express();
const port = 3080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//for test connection
app.get('/', (req, res) => {
  res.json({'message': 'Wellcome, app is running'});
})

//pass router for file inside /students
app.use('/students', studentsDataRouter);

// Error handler middleware 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    return;
  });

app.listen(port, () => {
  console.log(`This app is running at http://localhost:${port}`)
});