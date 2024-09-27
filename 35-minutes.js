//Write a JavaScript function to get minutes with leading zeros (00 to 59).

function getMinutes(date){
    let date1 = new Date(date)

    console.log(date1.toDateString());
    let minutes = date1.getMinutes();
    console.log(minutes)
    return minutes
}

console.log(getMinutes("2024-01-01 12:18:53"));