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

function getProjectsInProgressFromMarketing() {
  let totalNumOfProjects = 0;
  for (let i = 0; i < employeeData.length; i++) {
    if (employeeData[i].department === "Marketing") {
      totalNumOfProjects += employeeData[i].projectsInProgress;
    }
  }

  return totalNumOfProjects;
}

const totalNumOfProjectsInProgress = getProjectsInProgressFromMarketing();
console.log("------------ ----------- -----------");
console.log(
  "Total Number of Projects In Progress By Marketing Department:",
  totalNumOfProjectsInProgress
);

console.log("------------ ----------- -----------");

function getTotalNumberOfProjectCompleted() {
  let totalNumberOfProjectsComplete = 0;
  for (let i = 0; i < employeeData.length; i++) {
    if (
      employeeData[i].department === "Marketing" ||
      employeeData[i].department === "Sales"
    ) {
      totalNumberOfProjectsComplete += employeeData[i].projectsCompleted;
    }
  }

  return totalNumberOfProjectsComplete;
}

const totalNumOfProjectsCompleted = getTotalNumberOfProjectCompleted();
console.log(
  "Total Number OF Projects Completed By Marketing And Sales:",
  totalNumOfProjectsCompleted
);
console.log("------------ ----------- -----------");

function getAverageAgeOfEmployeesOfSales() {
  let totalAge = 0;
  let employeeCount = 0;
  for (let i = 0; i < employeeData.length; i++) {
    if (employeeData[i].department === "Sales") {
      totalAge += employeeData[i].age;
      employeeCount += 1;
    }
  }

  const averageAge = totalAge / employeeCount;
  return averageAge;
}

const averageEmployeeAgeOfSales = getAverageAgeOfEmployeesOfSales();
console.log("Average Age Of Employees Of Sales:", averageEmployeeAgeOfSales);
