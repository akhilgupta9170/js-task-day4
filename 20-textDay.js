//Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).

function getDay(date){
    
    let day = new Date(date)
    let count= day.getDay()
    console.log(day.toDateString())
    console.log(date)
    
 
   
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return weekdays[count]

}

console.log(getDay("2024-01-11"))
