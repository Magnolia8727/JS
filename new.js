let shoppingList = ['eggs','bread','milk']
let employees = ['YU','Me','US']
let priceList = [49,3,3,2,4,8.9]



employees.push('All'); // adding something
employees.pop // removes last element only

var when = employees.includes('Solomon')


const employeess = employees.map( (string) => string.toLowerCase() );


console.log(employees)
console.log(when)

var first = employees.shift();
console.log(first);
console.log(employees)

var secnd = employees.unshift('Others');
console.log(secnd)
console.log(employeess)



let ppl = [

    {id: '1000' ,name: 'Me' , age:12},
    {id: '2000' , name:'YU' , age:12},
    {id: '4000' , name: 'NU' , age:13}

];


var price = 14.4;
var quantity = 2;

function myMethod(price,quantity)
{

    return price * quantity ;


}

console.log( myMethod(14.4,2) );



