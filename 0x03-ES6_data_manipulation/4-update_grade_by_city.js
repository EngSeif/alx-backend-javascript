export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    let added = false;
    const studentWithGrade = { ...student };
    for (const report of newGrades) {
      if (report.studentId === student.id) {
        studentWithGrade.grade = report.grade;
        added = true;
      }
    }
    if (!added) studentWithGrade.grade = 'N/A';
    return studentWithGrade;
  });
}
