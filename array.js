const prompt = require('prompt-sync')({ sigint: true});

let product = {

    name: 'laptop',
    model: 'IEX',
    price: 1200,
    quantity: 300

};

function theVoid (product)
{

    var myDec = prompt('1 or 2: ');


    if (myDec === '1') {
        return `Product is ${product.name}! and the model is ${product.model} and the
     price is ${product.price} with quantity of ${product.quantity} `
    }
    else
    {
        return `Product ${product.name}`;
    }

}

console.log(theVoid(product));

console.log('Tough part');


let products = [
    {name: 'laptop', model: 'IEX', price:3000} ,
    {name: 'Desktop', model:'EIO' , price:2000},
    {name: 'Tablet', model:'OUX', price:2100},
]

var productName = prompt('Product Name: ');

function returnProduct (products)
{
    var s = null;

    for (gg of products)
    {
        if(productName === gg.name)
        {
            s = product;
        }

    }

    return `Product details: \n Name: ${s.name}\nModel: ${s.model}\nPrice: ${s.price}`

}

console.log(returnProduct(products));


console.log('Tough part , another part');



var me = {
    name: 'ME',
    amount: 13000,
    items : [
        {name: 'laptop', model: 'IEX', price:20000},
        {name: 'Desktop', model: 'EIO', price:20000},
    ]
}

function  buy (me)
{
    var cost = 0;

    for ( item of me.items)
    {
        cost += item.price;

    }

    var totalAmount = me.amount - cost;

    return `Total Amount of the Items is ${cost} \n
             Total change after buying is ${totalAmount}` ;

}

console.log(buy(me));




















