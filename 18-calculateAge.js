//Write a JavaScript program to calculate age.
function calculateAge(program){
     let birthYear = new Date(program).getFullYear()
     console.log(birthYear)
     let currentYear = new Date().getFullYear();
     console.log(currentYear)
     let age = currentYear - birthYear;
     return age;
}

console.log(calculateAge(new Date("1999-10-10")))
