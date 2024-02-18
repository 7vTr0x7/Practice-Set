const courseData = [
  {
    courseName: "Physics",
    student1: 88,
    student2: 75,
    student3: 82,
    student4: 95,
    student5: 85,
  },
  {
    courseName: "Computer Science",
    student1: 78,
    student2: 90,
    student3: 95,
    student4: 96,
    student5: 92,
  },
  {
    courseName: "Economics",
    student1: 92,
    student2: 85,
    student3: 88,
    student4: 94,
    student5: 89,
  },
  {
    courseName: "Chemistry",
    student1: 90,
    student2: 94,
    student3: 92,
    student4: 99,
    student5: 91,
  },
];

function getAverageMarksOfPhysics() {
  let totalMarks = 0;
  const studentCount = 5;
  for (let i = 0; i < courseData.length; i++) {
    if (courseData[i].courseName === "Physics") {
      totalMarks +=
        courseData[i].student1 +
        courseData[i].student2 +
        courseData[i].student3 +
        courseData[i].student4 +
        courseData[i].student5;
    }
  }

  let averageMarks = totalMarks / studentCount;
  return averageMarks;
}

const totalAverageMarksOfPhysics = getAverageMarksOfPhysics();

console.log("Total Average Marks Of Physics:", totalAverageMarksOfPhysics);

console.log("---------- ----------- -------------");

function getAverageMarksOfComSci() {
  let totalMarks = 0;
  const studentCount = 5;
  for (let i = 0; i < courseData.length; i++) {
    if (courseData[i].courseName === "Computer Science") {
      totalMarks +=
        courseData[i].student1 +
        courseData[i].student2 +
        courseData[i].student3 +
        courseData[i].student4 +
        courseData[i].student5;
    }
  }

  const averageMarks = totalMarks / studentCount;
  return averageMarks;
}

const averageMarksOfComSci = getAverageMarksOfComSci();

console.log("Total Average Marks Of Com Sci:", averageMarksOfComSci);

console.log("------ ------- -------");

function getAverageMarksOfEco() {
  let totalMArks = 0;
  const studentCount = 5;
  for (let i = 0; i < courseData.length; i++) {
    if (courseData[i].courseName === "Economics") {
      totalMArks +=
        courseData[i].student1 +
        courseData[i].student2 +
        courseData[i].student3 +
        courseData[i].student4 +
        courseData[i].student5;
    }
  }

  const averageMarks = totalMArks / studentCount;
  return averageMarks;
}

const averageMArksOfEco = getAverageMarksOfEco();

console.log("Average Marks Of Economics:", averageMArksOfEco);
