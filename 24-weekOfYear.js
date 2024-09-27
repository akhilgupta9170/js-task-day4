// Write a JavaScript function for obtaining ISO-8601 week numbers for weeks that begin on Monday.
function getWeekNumbers(date){
    let presentDate= new Date(date)
    let firstDay= new Date(presentDate.getFullYear(), 0,1)
    let diff = presentDate.getTime() - firstDay.getTime();
    let days = Math.floor(diff/(1000*60*60*24))
    return days

}


console.log(getWeekNumbers("2015-10-01"))
