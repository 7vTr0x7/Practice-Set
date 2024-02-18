const projectDetails = [
  { projectName: "Project A", teamSize: 8, budget: 120000 },
  { projectName: "Project B", teamSize: 12, budget: 180000 },
  { projectName: "Project C", teamSize: 6, budget: 90000 },
  { projectName: "Project D", teamSize: 10, budget: 150000 },
  { projectName: "Project E", teamSize: 15, budget: 200000 },
];

function getAverageTeamSize() {
  let totalOfTeamSize = 0;
  for (let i = 0; i < projectDetails.length; i++) {
    totalOfTeamSize += projectDetails[i].teamSize;
  }

  let averageOfTeamSize = totalOfTeamSize / projectDetails.length;
  return averageOfTeamSize;
}

const averageOfTeamSize = getAverageTeamSize();
console.log("------ --------- ------");
console.log("Average Of Team Size:", averageOfTeamSize);
console.log("------ --------- ------");

function getTotalBudgetOfQuarter() {
  let totalBudget = 0;
  for (let i = 0; i < projectDetails.length; i++) {
    totalBudget += projectDetails[i].budget;
  }

  return totalBudget;
}

const totalBudgetOfQuarter = getTotalBudgetOfQuarter();
console.log("Total Budget Of Quarter:", totalBudgetOfQuarter);
console.log("------ --------- ------");
