const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const dataLines = data.split('\n');
    const cs = [];
    const swe = [];
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
    console.log(`Number of students: ${cs.length + swe.length}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
    throw err;
  }
};

module.exports = countStudents;
