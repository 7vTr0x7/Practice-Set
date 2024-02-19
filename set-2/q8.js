const coursesData = [
  {
    courseName: "Course X",
    instructor: "Instructor A",
    enrollments: 9500,
    contentHours: 40,
  },
  {
    courseName: "Course Y",
    instructor: "Instructor B",
    enrollments: 12000,
    contentHours: 60,
  },
  {
    courseName: "Course Z",
    instructor: "Instructor C",
    enrollments: 5000,
    contentHours: 30,
  },
  {
    courseName: "Course W",
    instructor: "Instructor D",
    enrollments: 8500,
    contentHours: 45,
  },
  {
    courseName: "Course V",
    instructor: "Instructor E",
    enrollments: 7000,
    contentHours: 50,
  },
];

function getCourseWithMoreThen8KEnrollment() {
  for (let i = 0; i < coursesData.length; i++) {
    if (coursesData[i].enrollments > 8000) {
      console.log("------ --------- -----");
      console.log("Course Name:", coursesData[i].courseName);
      console.log("Instructor:", coursesData[i].instructor);
      console.log("Enrollments:", coursesData[i].enrollments);
    }
  }
}
getCourseWithMoreThen8KEnrollment();

function getTotalHoursOfContent() {
  let totalHours = 0;
  for (let i = 0; i < coursesData.length; i++) {
    if (coursesData[i].enrollments > 6000) {
      totalHours += coursesData[i].contentHours;
    }
  }

  return totalHours;
}

const totalHoursOfContent = getTotalHoursOfContent();

console.log("Total Hours Of Content:", totalHoursOfContent);
