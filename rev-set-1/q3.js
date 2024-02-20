const studentsData = [
  {
    name: "Rahul",
    rollNo: 201,
    chemistry: 88,
    maths: 78,
    commerce: 92,
    physicalEducation: 90,
    moralScience: 85,
    totalMarks: 433,
    avgMarks: 86.6,
  },
  {
    name: "Priya",
    rollNo: 202,
    chemistry: 75,
    maths: 90,
    commerce: 85,
    physicalEducation: 94,
    moralScience: 88,
    totalMarks: 432,
    avgMarks: 86.4,
  },
  {
    name: "Amit",
    rollNo: 203,
    chemistry: 82,
    maths: 95,
    commerce: 88,
    physicalEducation: 92,
    moralScience: 90,
    totalMarks: 447,
    avgMarks: 89.4,
  },
  {
    name: "Neha",
    rollNo: 204,
    chemistry: 95,
    maths: 96,
    commerce: 94,
    physicalEducation: 99,
    moralScience: 99,
    totalMarks: 483,
    avgMarks: 96.6,
  },
  {
    name: "Anita",
    rollNo: 205,
    chemistry: 85,
    maths: 92,
    commerce: 89,
    physicalEducation: 91,
    moralScience: 86,
    totalMarks: 443,
    avgMarks: 88.6,
  },
];

function getTotalAverageOfChemistry() {
  let totalMarks = 0;
  for (let i = 0; i < studentsData.length; i++) {
    totalMarks += studentsData[i].chemistry;
  }
  const average = totalMarks / studentsData.length;
  return average;
}

const totalAverageOfChemistry = getTotalAverageOfChemistry();
console.log("---------- ------------- -----------");
console.log("Total Average Of Chemistry:", totalAverageOfChemistry);
console.log("---------- ------------- -----------");

function getTotalAverageOfMaths() {
  let totalMarks = 0;
  for (let i = 0; i < studentsData.length; i++) {
    totalMarks += studentsData[i].maths;
  }

  let average = totalMarks / studentsData.length;
  return average;
}

const totalAverageOfMaths = getTotalAverageOfMaths();
console.log("Total Average Of Maths:", totalAverageOfMaths);

console.log("---------- ------------- -----------");

function getTotalAverageOfCommerce() {
  let total = 0;
  for (let i = 0; i < studentsData.length; i++) {
    total += studentsData[i].commerce;
  }

  const average = total / studentsData.length;
  return average;
}

const totalAverageOfCommerce = getTotalAverageOfCommerce();
console.log("Total Average OF Commerce:", totalAverageOfCommerce);
console.log("---------- ------------- -----------");
