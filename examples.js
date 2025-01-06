var petDog = "Rex";
var petCat  = "Pepper";

console.log(petDog);
console.log(petCat);

console.log("My pet dog's name is: " + petDog);
console.log("My pet cat's name is: " + petCat);

var catSound = "purr";
var dogSound = "woof";


console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);

catSound = "meow";
console.log(petCat, "now says", catSound);


/*------------------------------------ */
var age = 10;
if (age >= 65){
    console.log("You get your income from your pension");
}else if(age < 65 &&  age >= 18){
    console.log("Each month you get a salary");
} else if( age < 18 ){
    console.log("You get an allowance");
} else{
    console.log("The value of the age variable is not numerical");
    
}

var day = "Sunday";

switch (day) {
    case "Monday":
        console.log("Do something");
        break;
    case "Tuesday":
        console.log("Do something");
        break;
    case "Wednesday":
        console.log("Do something");
        break;
    case "Thirsday":
        console.log("Do something");
        break;
    case "Friday":
        console.log("Do something");
        break;
    case "Saturday":
        console.log("Do something");
        break;
    case "Sunday":
        console.log("Do something");
        break;
    default:
        console.log("There is no such day");
        break;
}
/*------------------------------------ */

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("Counting completed!");

var counter = 5;
while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
}
console.log("Countdown finished!");
/*------------------------------------ */

for (let i = 1; i <= 10; i++) {
    if(i == 1){
        console.log("Gold");
    } else if(i == 2){
        console.log("Silver");
    } else if(i == 3){
        console.log("Bronze");
    }else{
        console.log(i);
    }

    switch (i) {
        case 1:
            console.log("Gold");
            break;
        case 2:
            console.log("Silver");
            break;
        case 3:
            console.log("Bronze");
            break;
        default:
            console.log(i);
            break;
    }
}

/*------------------------------------ */
function letterFiner(word, match) {
    for (let i = 0; i < word.length; i++) {
        if(word[i] == match){
            console.log('Found the', match, 'at', i);
        } else {
            console.log('---No match found at', i)
        }
        
    }
}

letterFiner("test", "t")

/*------------------------------------ */


var clothes = [];

clothes.push("t-shirt", "pants", "Socks", "headband", "Shirt");

clothes.pop(4);

clothes.push("Skirt");
console.log(clothes);

var favCar = {};

favCar.color = "Silver";
favCar.convertible = true;

console.log(favCar);

/*------------------------------------ */

try {
    console.log(a+b);
    
} catch (error) {
    console.log(error);
    
}
console.log("Still running");

/*------------------------------------ */


function addTwoNumbers(a, b){
    try {
        if (typeof(a) != 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if(typeof(b) != 'number'){
            throw new ReferenceError('the second argument is not a number');
            
        }else{
            console.log(a+b);
        }
    } catch (err) {
        console.log("Error!", err);
    }
}

addTwoNumbers(5, "5")

console.log("It still works");

/*-------------------------------------- */

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;

    if(condition1 && condition2){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        } 
    } else {
        console.log("Please pass correct arguments to the function.");
    }
}

letterFinder(1, 5);
letterFinder("cat", "c")

/*-------------------------------------- */
var x;

if(x === null) {
  console.log("null");
} else if(x === undefined) {
  console.log("undefined");
} else {
  console.log("ok");
}
/*-------------------------------------- */
var result = null;
console.log(result);

/*-------------------------------------- */



console.log(result);
var result = 7;



function addFive(val) {
    return val + 5;
};
module.exports = addFive;

var x = 2.5;
console.log(typeof(x));

document.createElement
/*-------------------------------------- */

class Sports {
    useEquipment() {
        console.log("Shoes");
    }
}
class Hockey extends Sports{
    useEquipment() {
        console.log("Helmet");
    }
}
class Climbing extends Sports{
    useEquipment(){
        super.useEquipment()
        console.log("Climbing Shoes");
    }
}

var hockey = new Hockey();
var climbing = new Climbing();
hockey.useEquipment(); 
climbing.useEquipment(); 

/*-------------------------------------- */
// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
        console.log("Zzzz");
    }
    doSomethingFun() {
        this.energy -= 10;
        console.log("Fun fun");
    }
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(xp = 0, hourlyWage = 10) {
        super(name, age, energy)
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
        console.log("Work");
    }
    

}
// Task 3: Code an intern object, run methods
function intern() {
    var internBob = new Worker(
        name = "Bob",
        age = 21,
        energy = 110,
        xp = 0,
        hourlyWage = 10)
    
    internBob.goToWork();
    return internBob;
}


// Task 4: Code a manager object, methods
function manager() {
    var managerAlice = new Worker(
        name = "Alice",
        age = 30,
        energy = 120,
        xp = 100,
        hourlyWage = 30)
    
    managerAlice.doSomethingFun();
    return managerAlice;
}

/*-------------------------------------- */

// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
    for (const item of dairy) {
        console.log(item);
    }
}

logDairy();

// Task 2
function birdCan() {
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for (const item of Object.keys(bird)) {
        console.log(item + ": " + bird[item]);
    }
}

birdCan();

// Task 3
function animalCan() {
    const animal = {
        canJump: true
    };

    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    for (const item in bird) {
        console.log(item + ": " + bird[item]);
    }
}

animalCan();

/*-------------------------------------- */

const fruit = ['Apple', 'Banana'];

const fruitSalad = [...fruit] ;
console.log(fruitSalad);

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

const greeting = "Welcome";
const arrayOfChars = [...greeting];
console.log(arrayOfChars);


let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);

console.log(set);

let obj = {
    key: 1,
    value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);

/*-------------------------------------- */


function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);