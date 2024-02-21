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

function getAverage(data, courseName) {
  let total = 0;
  const studentCount = 5;
  for (let i = 0; i < data.length; i++) {
    if (data[i].courseName === courseName) {
      total +=
        data[i].student1 +
        data[i].student2 +
        data[i].student3 +
        data[i].student4 +
        data[i].student5;
    }
  }

  const average = total / studentCount;
  return average;
}

const averageOfPhysics = getAverage(courseData, "Physics");
console.log("Average Of Physics:", averageOfPhysics);

const averageOfComScience = getAverage(courseData, "Computer Science");
console.log("Average Of Com Science:", averageOfComScience);

const averageOfEconomics = getAverage(courseData, "Economics");
console.log("Average Of Eco:", averageOfEconomics);
