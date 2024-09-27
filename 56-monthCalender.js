//Write a JavaScript program that accepts a month in the format mm/yyyy and display the month's calendar.

function monthToCalendar(month, year) {
  let calendar = [];
  let date = new Date(year, month);
  console.log(date);
  let numDays = new Date(year, month, 0);
  console.log(numDays);
  let firstDay = date.getDay();

  for (let i = 0; i < firstDay; i++) {
    calendar.push("");
  }
  // console.log("1",calendar)
  for (let i = 1; i <= numDays; i++) {
    calendar.push(i);
  }
  // console.log("2",calendar)

  let lastDay = calendar.length % 7;
  for (let i = 0; i < 7 - lastDay; i++) {
    calendar.push("");
  }

  // console.log("3",calendar)
  // console.log("calender length",calendar.length)

  let weeks = Math.ceil(calendar.length / 7);
  // console.log("weeks",weeks)
  for (let i = 0; i < weeks; i++) {
    let week = calendar.slice(i * 7, (i + 1) * 7);
    console.log(week.join(" "));
  }
}

monthToCalendar(12, 2022);
