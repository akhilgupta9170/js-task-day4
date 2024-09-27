//Write a JavaScript function to get time differences in months between two dates.

function getMonthDifference(date1, date2) {
  let diffInMs = Math.abs(date2 - date1);
  let diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
  return diffInMonths;
}

console.log(
  getMonthDifference(
    new Date("October 13, 2014 08:11:00"),
    new Date("December 20, 2014 11:13:00")
  )
);
