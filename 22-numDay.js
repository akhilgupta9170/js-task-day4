//Write a JavaScript function to get an ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday).
 
function numericRepresentation(date){
    let day = new Date(date)
    console.log(day.toDateString())
    return day.getDay()+1;
    

}
 

console.log(numericRepresentation("2024-01-11"))
