import readDatabase from '../utils';

export class StudentsController {
    static getAllStudents(req, res) {
	res.status(200);
	res.setHeader('Content-type', 'text/plain');
	readDatabase(process.argv[2])
	    .then((obj) => {
		res.write('This is the list of our students\n');
		const output = [];
		for (const key in obj) {
		    output.push(`Number of students in ${key}: ${obj[key].length}. List: ${obj[key].join(', ')}`);
		}
		res.write(output.join('\n'));
		res.end()
	    })
	    .catch((err) => {
		res.status(500).end(err.message);
	    });
    }

    static getAllStudentsByMajor(req, res) {
	res.status(200);
	res.setHeader('Content-type', 'text/plain');
	const major = (req.params.major).toUpperCase();
	if (!(major == 'CS' || major == 'SWE')) {
	    return res.status(500).end('Major parameter must be CS or SWE');
	}
	readDatabase(process.argv[2])
            .then((obj) => {
                res.write(`List: ${obj[major].join(', ')}`);
		res.end();
            })
            .catch((err) => {
                res.status(500).end(err.message);
            });
    }
}
