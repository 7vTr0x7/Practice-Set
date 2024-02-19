const projectDetails = [
  {
    projectName: "Project X",
    department: "Engineering",
    tasksCompleted: 150,
    tasksInProgress: 30,
    duration: 10,
  },
  {
    projectName: "Project Y",
    department: "Product Management",
    tasksCompleted: 180,
    tasksInProgress: 20,
    duration: 8,
  },
  {
    projectName: "Project Z",
    department: "Engineering",
    tasksCompleted: 120,
    tasksInProgress: 25,
    duration: 12,
  },
  {
    projectName: "Project W",
    department: "Sales",
    tasksCompleted: 90,
    tasksInProgress: 15,
    duration: 15,
  },
  {
    projectName: "Project V",
    department: "Product Management",
    tasksCompleted: 200,
    tasksInProgress: 10,
    duration: 9,
  },
];

function getTotalTaskInProgressFromEngineeringDept() {
  let totalTask = 0;
  for (let i = 0; i < projectDetails.length; i++) {
    if (projectDetails[i].department === "Engineering") {
      totalTask += projectDetails[i].tasksInProgress;
    }
  }

  return totalTask;
}

const totalTaskInProgress = getTotalTaskInProgressFromEngineeringDept();
console.log(
  "Total Tasks In Progress From Engineering department:",
  totalTaskInProgress
);

function getTasksCompleted() {
  let totalCompleted = 0;
  for (let i = 0; i < projectDetails.length; i++) {
    if (
      projectDetails[i].department === "Engineering" ||
      projectDetails[i].department === "Product Management"
    ) {
      totalCompleted += projectDetails[i].tasksCompleted;
    }
  }
  return totalCompleted;
}

const totalTasksCompleted = getTasksCompleted();
console.log(
  "Total Tasks Completed By Engineering and Product Management Dept:",
  totalTasksCompleted
);

function getAverageDurationOfProject() {
  let totalDuration = 0;
  let projectCount = 0;
  for (let i = 0; i < projectDetails.length; i++) {
    if (projectDetails[i].department === "Product Management") {
      totalDuration += projectDetails[i].duration;
      projectCount += 1;
    }
  }
  const averageDuration = totalDuration / projectCount;
  return averageDuration;
}

const averageDurationOfProject = getAverageDurationOfProject();

console.log(
  "Average Duration Of Project From Project Department:",
  averageDurationOfProject
);
