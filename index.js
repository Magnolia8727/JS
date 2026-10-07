const perHour = 5.75;
const hours = 8;
const fare = 3.60;

let gross1 = 5.75 * 8;
let gross2 = gross1 - 3.60;


console.log('Example 3 : R' + gross2);


let mark = 80;

let mark2 = 50;

console.log('avarage ' + (mark+mark2)/2 );

console.log('Mail Orders');




















let cusName = prompt("Enter name of Customer");


let name = prompt("Enter name of book/cd");
let names   = new Array('Cd1','Cd2','Book1','Book2'); 

if( names.includes('$name') )
{
    console.log('Item exists and the prics is ' + 29.99);
    console.log('Packaging cost is equivalent to 5% of the price, hence' + 29.99*(5/100) )
    let insure = prompt('Would u like insurance? Y for Yes and N for No');
    
    if( insure === 'Y')
    {
      console.log('Insurance price is 5% of price, hence' + 29.99*(5/100) );


    }

    else {
        console.log('Noted user needs no insurance');
    }

    console.log('Dispatch date is 22-09-26 , Arrival date is 27-09-26');

    console.log('Would u like to proceed with the other -- Y for Yes , N for No');
    

}
else {
    console.warn('Names doesnt exist');
}