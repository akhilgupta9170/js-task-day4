//Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.
function getAmPm(dt){
   let hours = new Date(dt).getDate();
   console.log(hours)
   let ampm = hours >= 12? 'pm' : 'am';
   hours = hours % 12;
   console.log(hours)
   return hours + ' ' + ampm;
   
}

console.log(getAmPm("2015-11-1 12:30:45"));