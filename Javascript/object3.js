let vikramObj = {
  name: "Vikram",
  class: {
    className: "Besant",
    discipline: {
      disciplineName: "Front end",
      subject: {
        subjectName: "English",
        area: {
          areaName: "Marathalli",
        },
      },
    },
  },
};

let val = vikramObj;
val.class.discipline.subject.subjectName = "Computer Science";
console.log(vikramObj.class.discipline.subject.subjectName);
// console.log(val.class.discipline.subject.subjectName )
