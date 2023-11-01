interface Student {
	  firstName: string;
	  lastName: string;
	  age: number;
	  location: string;
}

const st1: Student = {
      firstName: "dotun",
      lastName: "Okoro",
      age: 22,
      location: "Enugu"
}

const st2: Student = {
      firstName: "Idowu",
      lastName: "Nse",
      age: 25,
      location: "Akwa-Ibom"
}

const studentsList: Array<Student> = [st1, st2];

studentsList.forEach((item) => {
	console.log(`${item.firstName} ${item.location}`)
})
