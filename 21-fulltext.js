//Write a JavaScript function to get a full textual representation of the weekday (Sunday through Saturday).

function getDayOfWeek(date) {
  let day = new Date(date).getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}

console.log(getDayOfWeek("2024-01-11"));
