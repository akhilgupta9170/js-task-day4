//Write a JavaScript function to get a full text representation of a month, such as January or June.

function getMonthName(date){
    let month = new Date(date).getMonth()
    console.log(month)
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months[month];
}

console.log(getMonthName("2024-05-10"))
