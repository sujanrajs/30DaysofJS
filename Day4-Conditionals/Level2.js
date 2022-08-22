/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

let studentMarks = 85;
if (studentMarks >= 80 && studentMarks <= 100) {
  console.log("The grade is A");
} else if (studentMarks >= 70 && studentMarks <= 89) {
  console.log("The grade is B");
} else if (studentMarks >= 60 && studentMarks <= 69) {
  console.log("The grade is C");
} else if (studentMarks >= 50 && studentMarks <= 59) {
  console.log("The grade is D");
} else {
  console.log("Fail");
}

/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

// only checking with switch cases.. better with if else statements ;)
let month = "May";
switch (month) {
  case "September":
  case "October":
  case "November":
    console.log("The season is Autumn");
    break;
  case "December":
  case "January":
  case "February":
    console.log("The seeason is winter");
    break;
  case "March":
  case "April":
  case "May":
    console.log("The season is Spring");
    break;
  default:
    console.log("The season is summer");
}

/* Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day. */

let day = "Friday";
if (day == "Sunday" || day == "Saturday") {
  console.log(`Its a Weekend`);
} else {
  console.log(`Its a Working day`);
}

// lets try with switch case
switch (day) {
  case "Sunday":
  case "Saturday":
    console.log("Its a Weekend");
    break;
  default:
    console.log("Its a working day");
}
