//Write a JavaScript function to get seconds with leading zeros (00 through 59).

function getSeconds(date){
    let date1 = new Date(date)

    console.log(date1.toDateString());
    let seconds = date1.getSeconds();
    console.log(seconds)
    return seconds
}
console.log(getSeconds("2018-01-01T12:39:46"))