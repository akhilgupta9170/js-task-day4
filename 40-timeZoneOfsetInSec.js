//Write a JavaScript function to get the timezone offset in seconds.

function getTimezoneOffsetInSeconds(date) {
  let date1 = new Date(date);
  return date1.getTimezoneOffset() * 60 * 1000;
}

console.log(getTimezoneOffsetInSeconds("2024-01-01T12:18:53"));
