//Write a JavaScript program to get the name of a day based on a given date in string format.
function dayName(date) {
  if (typeof date !== "string") {
    return "Date is not a string";
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dt = date.split("/");
  //    console.log(dt)
  let d = new Date(dt[2], dt[1] - 1, dt[0]);
  return days[d.getDay()];
}

console.log(dayName("07/11/2000"));
