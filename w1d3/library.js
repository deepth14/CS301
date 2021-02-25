/*  input                           operations          output 

    status/number of books overdue   &&         laon duration in weeks
    
    
    student:0,<3,>=3                   
    faculty:0,<3,>=3
    other:0,<3,>=3


*/

const prompt = require('prompt-sync')();

let status = prompt('enter your status: ');
let booksOverDue = prompt('entert the number of books over dues: ');

if (status === 'student' && booksOverDue == 0){
    console.log(6)
}
else if (status === 'student' && booksOverDue < 3){
    console.log(4)
}
else if (status === 'student' && booksOverDue >= 3){
    console.log(2)
}
else if (status === 'faculty' && booksOverDue == 0){
    console.log(12)
}
else if (status === 'faculty' && booksOverDue < 3){
    console.log(10)
}
else if (status === 'faculty' && booksOverDue >= 3){
    console.log(8)
}
else if (status && booksOverDue == 0){
    console.log('fuck u')
}
else if (status && booksOverDue < 3){
    console.log(3)
}
else if (status && booksOverDue >= 3){
    console.log(2)
}



