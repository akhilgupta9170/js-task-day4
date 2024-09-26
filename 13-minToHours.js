//Write a JavaScript function that returns the number of minutes in hours and minutes.

function convertMinutesToHours(minutes){
    let hours = Math.floor(minutes/60);
    let remainingMinutes = minutes %60;
    return `${hours} hours and ${remainingMinutes} minutes`;
}

console.log(convertMinutesToHours(200));