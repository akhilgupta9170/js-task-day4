//Write a JavaScript function to convert a Unix timestamp to time.

function unixToTime(timestamp) {
  let date = new Date(timestamp * 1000);
  console.log(date.toString());
  let hours = date.getHours();
  // console.log(hours)
  let minutes = date.getMinutes();
  // console.log(minutes)
  let seconds = date.getSeconds();
  // console.log(seconds)
  let formattedTime = hours + ":" + minutes + ":" + seconds;
  // console.log(formattedTime)
  return formattedTime;
}

console.log(unixToTime(1609459200));
