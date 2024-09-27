function getMonth(date) {
  let month = new Date(date).getMonth();
  console.log(month);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[month];
}

console.log(getMonth("2014-05-01"));
