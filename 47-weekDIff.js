//Write a JavaScript function to get time differences in weeks between two dates.

function getWeekDifference(date1, date2) {
  let diffInMs = Math.abs(date2 - date1);
  let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  let diffInWeeks = Math.floor(diffInDays / 7);
  return diffInWeeks;
}

console.log(
  getWeekDifference(
    new Date("October 13, 2014 08:11:00"),
    new Date("October 20, 2014 11:13:00")
  )
);
