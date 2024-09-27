//Write a JavaScript function to get the Timezone.

function getFullTimezoneName(date) {
    console.log(date.toLocaleString('en-US', { timeZoneName: 'long' }))
    return date.toLocaleString('en-US', { timeZoneName: 'long' }).split(' ').slice(2).join(' ');
  }
  
  
  const dt = new Date();
  console.log(getFullTimezoneName(dt)); 
  