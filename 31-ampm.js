//Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.
//Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.
function getAmPm(dt) {
  let hours = new Date(dt).getHours();
  console.log(hours);

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  console.log(hours);
  return hours + " " + ampm;
}

console.log(getAmPm("2015-11-1 14:30:45"));
