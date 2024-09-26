//Write a JavaScript function to calculate 'yesterday's day.

function yesterday(d){
     let today = new Date(d);
     console.log(today)
     console.log(today.toDateString())
     console.log(today.toString())
     today.setDate(today.getDate()-1);
     
     return today.toDateString();
}

console.log(yesterday('Nov 15, 2014'));