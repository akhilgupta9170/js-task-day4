//write a JavaScript function to get the 12-hour format of an hour with leading zeros

function getTwelveHourFormat(date) {
  let hours = new Date(date).getHours();
  hours = hours % 12 || 12;
  if (hours < 10) return "0" + hours;
  return hours;
}

console.log(getTwelveHourFormat("2015-11-1 14:30:45"));
