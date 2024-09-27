//Write a JavaScript function to get time differences in minutes between two dates.

function getTimeDifference(date1, date2) {
  let diffInMs = Math.abs(date2 - date1);
  let diffInMIns = diffInMs / (1000 * 60);
  console.log(diffInMIns);
}

getTimeDifference(
  new Date("2021-05-25 15:30:00"),
  new Date("2021-05-25 16:40:00")
);
