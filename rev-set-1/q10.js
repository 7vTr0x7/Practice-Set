const employeeData = [
  {
    employeeName: "Alex",
    age: 28,
    department: "Development",
    projectsCompleted: 5,
    projectsInProgress: 3,
  },
  {
    employeeName: "Beth",
    age: 35,
    department: "Marketing",
    projectsCompleted: 8,
    projectsInProgress: 5,
  },
  {
    employeeName: "Charlie",
    age: 40,
    department: "Sales",
    projectsCompleted: 12,
    projectsInProgress: 4,
  },
  {
    employeeName: "David",
    age: 32,
    department: "Development",
    projectsCompleted: 6,
    projectsInProgress: 13,
  },
  {
    employeeName: "Emily",
    age: 45,
    department: "Sales",
    projectsCompleted: 10,
    projectsInProgress: 3,
  },
  {
    employeeName: "Frank",
    age: 37,
    department: "Marketing",
    projectsCompleted: 10,
    projectsInProgress: 5,
  },
];

function getTotalProjectInProgress() {
  let totalProjectInProgress = 0;
  for (let i = 0; i < employeeData.length; i++) {
    if (employeeData[i].department === "Marketing") {
      totalProjectInProgress += employeeData[i].projectsInProgress;
    }
  }

  return totalProjectInProgress;
}

const totalProjectInProgress = getTotalProjectInProgress();

console.log("------------ --------------- ----------------");

console.log(
  "Total Number Of Projects In Progress From Marketing Dept:\n",
  totalProjectInProgress
);

console.log("------------ --------------- ----------------");

function getTotalNumberOfProjectCompleted() {
  let totalProjectCompleted = 0;
  for (let i = 0; i < employeeData.length; i++) {
    if (
      employeeData[i].department === "Marketing" ||
      employeeData[i].department === "Sales"
    ) {
      totalProjectCompleted += employeeData[i].projectsCompleted;
    }
  }
  return totalProjectCompleted;
}

const totalProjectsCompleted = getTotalNumberOfProjectCompleted();
console.log(
  "Total Project Completed By Marketing and Sales Department:\n",
  totalProjectsCompleted
);
console.log("------------ --------------- ----------------");

function getAverageAgeOfEmpOfSales() {
  let totalAgeCount = 0;
  let employeeCount = 0;
  for (let i = 0; i < employeeData.length; i++) {
    if (employeeData[i].department === "Sales") {
      totalAgeCount += employeeData[i].age;
      employeeCount += 1;
    }
  }
  const average = totalAgeCount / employeeCount;
  return average;
}

const averageAgeOfEmployeeOfSales = getAverageAgeOfEmpOfSales();

console.log(
  "Average Age Of Employees Of Sales:\n",
  averageAgeOfEmployeeOfSales
);
