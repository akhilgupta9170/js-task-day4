//Write a JavaScript program to check if the current date is a weekday or a weekend.
function weekEndOrWeekday(date) {
  let day = date.getDay();
  if (day === 0 || day === 6) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

console.log(weekEndOrWeekday(new Date("2024-01-21")));
