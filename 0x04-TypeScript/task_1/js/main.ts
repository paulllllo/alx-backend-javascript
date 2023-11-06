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

interface studentClassShape {
	  firstName: string;
	  lastName: string;
	  workOnHomework: () => "Currently working";
	  displayName: () => string;
}

class StudentClass implements studentClassShape {
      firstName: string;
      lastName: string;

      constructor(firstName: string, lastName: string) {
      			     this.firstName = firstName;
			     this.lastName = lastName;
      }
      workOnHomework = (): "Currently working" => {
      		     return ("Currently working")
      }
      displayName = (): string => {
      		  return this.firstName
      }
}

const st1 = new StudentClass("Wale", "Olowu");
console.log(st1.displayName());
