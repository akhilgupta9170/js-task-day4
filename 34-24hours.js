//Write a JavaScript function to get the 24-hour format of an hour without leading zeros.

function getTwentyFourHourFormat(date){
    let hours = new Date(date).getHours();
    return hours

}

console.log(getTwentyFourHourFormat("2015-11-1"))