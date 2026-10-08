const prompt = require('prompt-sync')({sigint : true})

let customer = {
    name: 'Joane Me',
    email: 'me@joane',
    cart : [
        {
            product: 'Apples',
            price: 5
        },
        {
            product: 'Milk',
            price: 10
        },
        {
            product: 'Eggs',
            price: 4
        },
        {
            product: 'Bread',
            price: 10
        }

    ]
}

function calculateTotal(customer ) {

    let amount = 0 ;

    for (let product of customer.cart)
    {
        amount += product.price;

    }

    console.log(`Total amount is R${amount}`);

}

calculateTotal(customer);

function displayProduct(customer)
{
    let products = `Products:` ;

    for (let product of customer.cart)
    {
        products += `\nProduct name: ${product.product} and Product price: ${product.price}`


    }

    console.log(products);


}

displayProduct(customer);

let product = {
    product: 'Orange',
    price: 5
}

function addProduct(customer,product)
{

    customer.cart.push(product);


    let products = `New Products:` ;

    for (let product of customer.cart)
    {
        products += `\nProduct name: ${product.product} and Product price: ${product.price}`


    }

    console.log(products);



}

addProduct(customer,product);


function findProduct(customer , productName)
{

    let res ;

    for(let product of customer.cart)
    {
        if(productName === product.product)
        {

            res = product;
            break;
        }
    }

    console.log(`The product ${res.product} its price is ${res.price}`);

}
findProduct(customer,'Orange');


























