//Write a JavaScript function to get the English ordinal suffix for the day of the month, 2 characters (st, nd, rd, or th).

function ordinalString(date){
    let day = new Date(date).getDate();
    let suffixes = ["st", "nd", "rd", "th"];
    let suff;
    if(day >3 && day <21){
        return day+"th";
    }
    switch(day%10){
        case 1: return day +"st";
        case 2: return day +"nd";
        case 3: return day +"rd";

    }
    
    
    
}

console.log(ordinalString("2024-01-31"));
