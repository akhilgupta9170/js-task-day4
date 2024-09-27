//Write a JavaScript function to get time differences in hours between two dates.

function getHour(date1, date2) {
    let diffInMs = Math.abs(date2 - date1);
    let diffInHours = diffInMs / (1000 * 60 * 60);
    return diffInHours;

}

console.log(getHour(new Date("October 13, 2014 08:11:00"), new Date("October 13, 2014 11:13:00")))