interface Teacher {
	  firstName: string;
	  lastName: string;
	  fullTimeEmployee: boolean;
	  yearsOfExperience?: number;
	  location: string;
}


interface Directors extends Teacher {
	  numberOfReports: number;
}

interface printTeacherFunction {
	  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (firstName: string, lastName: string){
	 return (`${firstName[0]}. ${lastName}`);
}

console.log(printTeacher("John", "Doe"));
