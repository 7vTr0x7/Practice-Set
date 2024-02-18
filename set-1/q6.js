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
  let totalAge = 0;
  for (let i = 0; i < employeeData.length; i++) {
    totalAge += employeeData[i].age;
  }

  const averageAge = totalAge / employeeData.length;
  return averageAge;
}

const averageAgeOfEmployee = getAverageAgeOfEmployee();
console.log("------- --------- ----------");
console.log("Average Age Of Employee:", averageAgeOfEmployee);
console.log("------- --------- ----------");

function getEmployeeWithMaxExp() {
  let employee = employeeData[0];
  for (let i = 1; i < employeeData.length; i++) {
    if (employeeData[i].experience > employee.experience) {
      employee = employeeData[i];
    }
  }
  return employee;
}

const employeeWithMaxExp = getEmployeeWithMaxExp();
console.log(employeeWithMaxExp);
