const techProjectsData = [
  {
    projectName: "Project X",
    teamSize: 8,
    budget: 150000,
    client: "ABC Corp",
    duration: 3,
  },
  {
    projectName: "Project Y",
    teamSize: 12,
    budget: 200000,
    client: "XYZ Inc",
    duration: 4,
  },
  {
    projectName: "Project Z",
    teamSize: 6,
    budget: 120000,
    client: "LMN Ltd",
    duration: 2,
  },
  {
    projectName: "Project W",
    teamSize: 10,
    budget: 180000,
    client: "PQR Co",
    duration: 5,
  },
  {
    projectName: "Project V",
    teamSize: 15,
    budget: 250000,
    client: "EFG Enterprises",
    duration: 6,
  },
];

function getProjectWithHighestBudget() {
  let project = techProjectsData[0];
  for (let i = 0; i < techProjectsData.length; i++) {
    if (techProjectsData[i].budget > project.budget) {
      project = techProjectsData[i];
    }
  }

  return project;
}

const projectWithHighestBudget = getProjectWithHighestBudget();

console.log("Project Name:", projectWithHighestBudget.projectName);
console.log("Team Size:", projectWithHighestBudget.teamSize);
console.log("Client:", projectWithHighestBudget.client);
console.log("Budget:", projectWithHighestBudget.budget);

console.log("-------- ----------- -----------");

function getAverageProjectDuration() {
  let totalDuration = 0;
  for (let i = 0; i < techProjectsData.length; i++) {
    totalDuration += techProjectsData[i].duration;
  }

  const average = totalDuration / techProjectsData.length;
  return average;
}

const averageProjectDuration = getAverageProjectDuration();

console.log("Average Project Duration:", averageProjectDuration);
console.log("-------- ----------- -----------");

function getProjectWithTeamSizeMoreThan10() {
  for (let i = 0; i < techProjectsData.length; i++) {
    if (techProjectsData[i].teamSize > 10) {
      console.log(techProjectsData[i]);
    }
  }
}
getProjectWithTeamSizeMoreThan10();
