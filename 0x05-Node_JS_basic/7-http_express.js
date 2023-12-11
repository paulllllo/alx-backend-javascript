const fs = require('fs');
const express = require('express');

const app = express();

const countStudents = (path) => fs.readFile(path, 'utf8')
  .then((data) => {
    const dataLines = data.split('\n');
    const cs = [];
    const swe = [];
    const output = [];
    for (let i = 1; i < dataLines.length; i += 1) {
      const row = dataLines[i].split(',');
      if (row.length === 4) {
        if (row[3] === 'CS') {
          cs.push(row[0]);
        } else if (row[3] === 'SWE') {
          swe.push(row[0]);
        }
      }
    }
    output.push(`Number of students: ${cs.length + swe.length}`);
    output.push(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    output.push(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
    return output;
  })
  .catch((err) => {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
    throw err;
  });

const port = 1245;
let database = '';
app.get('/', (req, res) => {
  res.writeHead(200);
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.writeHead(200);
  res.write('This is the list of our students\n');
  res.end(database);
});

countStudents(`${__dirname}/${process.argv[2]}`)
  .then((output) => {
    database += output.join('\n');
    app.listen(port, () => {

    });
  })
  .catch((err) => {
    database += (err.message);
    app.listen(port, () => {
    });
  });

module.exports = app;
