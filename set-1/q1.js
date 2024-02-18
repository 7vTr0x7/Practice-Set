const studentsMarks = [
  {
    name: "Preethi",
    rollNo: 301,
    chemistry: 78,
    maths: 88,
    commerce: 90,
    physicalEducation: 90,
  },
  {
    name: "Priya",
    rollNo: 302,
    chemistry: 75,
    maths: 90,
    commerce: 85,
    physicalEducation: 94,
  },
  {
    name: "Jaya",
    rollNo: 303,
    chemistry: 82,
    maths: 95,
    commerce: 88,
    physicalEducation: 92,
  },
  {
    name: "Prema",
    rollNo: 304,
    chemistry: 85,
    maths: 96,
    commerce: 91,
    physicalEducation: 99,
  },
  {
    name: "Shreetama",
    rollNo: 305,
    chemistry: 83,
    maths: 92,
    commerce: 89,
    physicalEducation: 91,
  },
];

function addTotalMarks() {
  for (let i = 0; i < studentsMarks.length; i++) {
    let total =
      studentsMarks[i].chemistry +
      studentsMarks[i].commerce +
      studentsMarks[i].maths +
      studentsMarks[i].physicalEducation;

    studentsMarks[i].totalMarks = total;
  }
}

addTotalMarks();

console.log("\nStudentMarks with Total Marks: \n\n", studentsMarks);

console.log("------- -------- -------");

function getTheNameOfStudentWithTotalMarksAbove445() {
  for (let i = 0; i < studentsMarks.length; i++) {
    if (studentsMarks[i].totalMarks > 345) {
      console.log(
        "Student Name with Total Marks > 445:",
        studentsMarks[i].name
      );
    }
  }
}

getTheNameOfStudentWithTotalMarksAbove445();
