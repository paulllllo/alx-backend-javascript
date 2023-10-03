export default function updateStudentGradeByCity(arr, city, newGrades) {
  const ftdArr = arr.filter((obj) => obj.location === city);
  return ftdArr.map((obj) => {
    const newObj = { ...obj };
    const grade = newGrades.filter((grade) => grade.studentId === newObj.id);
    if (grade.length > 0) {
      newObj.grade = grade[0].grade;
    } else {
      newObj.grade = 'N/A';
    }

    return newObj;
  });
}
