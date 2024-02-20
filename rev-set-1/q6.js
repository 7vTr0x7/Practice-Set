const employeeData = [
  { employeeName: "John Doe", age: 35, department: "HR", experience: 7 },
  {
    employeeName: "Jane Smith",
    age: 42,
    department: "Finance",
    experience: 12,
  },
  { employeeName: "Michael Johnson", age: 30, department: "IT", experience: 5 },
  {
    employeeName: "Emily Williams",
    age: 45,
    department: "Sales",
    experience: 15,
  },
  {
    employeeName: "David Brown",
    age: 38,
    department: "Marketing",
    experience: 9,
  },
];

function getAverageAgeOfEmployee() {
  let totalOfAge = 0;
  for (let i = 0; i < employeeData.length; i++) {
    totalOfAge += employeeData[i].age;
  }

  const average = totalOfAge / employeeData.length;
  return average;
}

const averageAgeOfEmployee = getAverageAgeOfEmployee();
console.log("Average Age Of Employee:", averageAgeOfEmployee);

console.log("---------- ----------- ----------");

function getEmployeeWithMaxExp() {
  let emp = employeeData[0];
  for (let i = 0; i < employeeData.length; i++) {
    if (employeeData[i].experience > emp.experience) {
      emp = employeeData[i];
    }
  }
  return emp;
}

const employeeWithMaxExp = getEmployeeWithMaxExp();
console.log("Employee with Maximum Experience:\n", employeeWithMaxExp);
