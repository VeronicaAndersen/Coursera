// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (var dish of dishData) {
        let finalPrice;
        if(taxBoolean){
            /*Inside the if block, multiply the following: 
            * the price of the currently looped-over object 
            from the dishData array, and * the tax value.*/
            finalPrice = dish.price * tax;
        } else if(taxBoolean === false){
            finalPrice = dish.price;
        } else{
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    if (typeof(guests) == 'number' && (guests > 0 && guests < 30)) {
        let discount = 0;
        if(guests < 5){
            /*In the first if, you'll check that the value of the guests 
            variable is less than 5. If that's the case, reassign the 
            value of the discount variable to 5;*/
            discount = 5;
        }else if(guests >= 5){
            /*Inside the else if condition, check that the value of the 
            guests variable is greater than or equal to 5 - if that's the 
            case, reassign the discount variable to 10.*/
            discount = 10;
        }
        console.log(`Discount is: $${discount}`);
    }else {
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 2);
getDiscount(null, 3);