interface DirectorInterface {
	  workFromHome: () => string;
	  getCoffeeBreak: () => string;
	  workDirectorTasks: () => string;
}

interface TeacherInterface {
	  workFromHome: () => string;
	  getCoffeeBreak: () => string;
	  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
      workFromHome = (): string => "Working from home";
      getCoffeeBreak = (): string => "Getting a coffee break";
      workDirectorTasks = (): string => "Getting to director tasks";
}

class Teacher implements TeacherInterface {
      workFromHome = (): string => "Cannot work from home";
      getCoffeeBreak = (): string => "Cannot have a break";
      workTeacherTasks = (): string => "Getting to work";
}

const createEmployee = (salary: number | string): DirectorInterface | TeacherInterface => {
      if ((typeof salary === "number") && (salary < 500)){
      	 return new Teacher();
      }
      return new Director();
}

const isDirector = (employee: DirectorInterface | TeacherInterface): employee is Director => {
      return 'workDirectorTasks' in employee
}

const executeWork = (employee: DirectorInterface | TeacherInterface): string => {
      if (isDirector(employee)) {
      	return employee.workDirectorTasks();
      } 
      return employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
	 if(todayClass === 'Math') return "Teaching Math";
	 return "Teaching History"
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
