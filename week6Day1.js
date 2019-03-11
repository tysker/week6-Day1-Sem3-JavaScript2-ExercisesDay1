//1) Using existing functions that takes a callback as an argument

/**
 * Opgave 1
 * Using the filter method:
 * Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). 
 * Use the filter method to create a new array with only names that contains the letter ‘a’.
 *  *  */
const myArray = ["Hans", "Lars", "Albert", "Berta", "Berit"];

// Only names with 'a'
const list = myArray.filter(name => name.includes('a'));
console.log(list);

// Use the names-array created above, and, using its map method, create a new array with all names reversed.
let reverseName = myArray.map(name => name.split("").reverse().join(""))
console.log(reverseName);


/************************************************************************************************** */


/**
 * 2) Implement user defined functions that take callbacks as an argument
 *  */
/*
a) Implement a function: myFilter(array, callback)that takes an array as the first argument, 
and a callback as the second and returns a new (filtered) array according to the code provided in the 
callback (this method should provide the same behaviour as the original filter method).
*/

function myFilter(array, callback) {
    const result = [];
    array.forEach(element => {
        if (callback(element)) {
            result.push(element);
        }
    });

    return result;
}

const res1 = myFilter(myArray, function (element) {
    return element.includes('a');
});
console.log(res1);

/********************************************************************************************** */


/*
b) Implement a function: myMap(array, callback)that, provided an array and a callback, 
provides the same functionality as calling the existing map method on an array.
*/

function myMap(array, callback) {
    const result = [];
    array.forEach(element => {

        result.push(callback(element));
    });

    return result;
}

const res2 = myMap(myArray, function (element) {
    return element.split("").reverse().join("");

});

console.log(res2);


/*************************************************************************************************** */


//4) Getting really comfortable with filter and map

var numbers = [1, 3, 5, 10, 11];


var result = numbers.map(function (value, index) {
    if ((index + 1) < numbers.length) {
        var next = numbers[index + 1];
    } else {
        next = 0;
    }
    return next + value;
});

console.log(result);

/*********************************************************************************************** */

//b) Use map() to create to create the <a>’s for a navigation set and eventually a 
// string like below (use join() to get the string of <a>’s):

const myNameArray = ["Hans", "Lars", "Albert", "Berta", "Berit"];

var htmlNames = myNameArray.map(name => "<a href=””>" + name + "</a>");
htmlNames.unshift("<nav>");
htmlNames.push("<nav>");
console.log(htmlNames.join("\n"));


/****************************************************************************************** */



//c) Use map()+(join + ..) to create to create a string, representing a two column table, for the data given below:

var names = [{
    name: "Lars",
    phone: "1234567"
}, {
    name: "Peter",
    phone: "675843"
}, {
    name: "Jan",
    phone: "98547"
}, {
    name: "Bo",
    phone: "79345"
}];

let stringNames = names.map(person => "Name: " + person.name + " Phone: " + person.phone + "<br>");
console.log(stringNames.join(","));


/************************************************************************************************ */


//a) Use join to create a single string from all, with names: comma-, space. and  # - separated.

var all = ["Lars", "Peter", "Jan", "Bo"];

var allString = all.map(name => name);
allString = allString.join(", #");
console.log(allString);

//****************************************************************************************** */


//b) Given this array: var numbers = [2, 3, 67, 33]; 
//Create a reducer callback that, with reduce(..),  will return the sum (105) of all values in numbers

var numbers = [2, 3, 67, 33];
var num = numbers.reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
});
console.log(num);

//********************************************************************************************* */

//c) Create a reducer callback that, using the Array’s  reduce() method,
//will return the average age of all members (25 for the provided array).

var members = [{
        name: "Peter",
        age: 18
    },
    {
        name: "Jan",
        age: 35
    },
    {
        name: "Janne",
        age: 25
    },
    {
        name: "Martin",
        age: 22
    }
]

//To sum up values contained in an array of objects you must supply an initial 
//value so that each item passes through your function.

var initialValue = 0;
var avg = members.reduce(function (accumulator, currentValue, currentIndex, array) {
    //return accumulator + (array[currentIndex].age);
    return accumulator + currentValue.age;
}, initialValue);

console.log(avg / 4);

/********************************************************************************************************** */

// Hoisting

x = 5;
var x;

console.log(x);
/*
What is hoisting?
You can declare a variable after it has been used;

A design rule we could follow, now we know about hoisting?
Always declare all variables at the beginning of every scope.

/******************************************************************************************** */
/*
What is the difference between the keyword ""var" and the ES6 keyword "let"?

Var is function based. It means you can use the variables in the whole function.
const and let is block based. You can't use them outside of the block.
In const and let you have to declare them outside of the block
const you have to define outside of the block.
*/
/************************************************************************************************* */

/**
 * How "this" in JavaScript differ from this in Java?
 * 
 * Java:
 * 
 * 
 * JavaScript:
 * Regular function call:
 * The this keyword points at the global object, (the window object in the browser)
 * 
 * Method call :
 * The this variable points to the object that is calling the method.
 * //
 * The this keyword is not assigned a value until the function where it is defined is actually called.
 * 
 */

// That is the window(browser) object. The window object is the default object in JavaScript
console.log(this)


//this is a regular function call, so the this keyword still points to the window object
calculateAge(1977); //output: 42 and window object

function calculateAge(year) {
    console.log(2019 - year)
    console.log(this)
}

// The this variable points to the object that is calling the method. The "john" object

var john = {
    name: 'John',
    yearOfBirth: 1977,
    calculateAge: function () {
        console.log(this);
        console.log(2019 - this.yearOfBirth);
    }
}

john.calculateAge(); //output: john object and 42

// object with a regular function call. And again the this keyword in the innerFunction
// points to the global window object
var hans = {
    name: 'Hans',
    yearOfBirth: 1977,
    calculateAge: function () {
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        function innerFunction() {
            console.log(this + "hallo");

        }
        innerFunction();
    }

}

hans.calculateAge(); // output: 42 and window object

// Method "borrowing"
// And again the "this" keyword is only assigned a value when the object calls the method.  

var mike = {
    name: 'Mike',
    yearOfBirth: 1990,
}
// mike is borrowing johns calculate method
mike.calculateAge = john.calculateAge;
mike.calculateAge(); //output 29


/****************************************************************************************************** */

// The purpose of the methods call(), apply() and bind()

// The different between call() and apply()
// Note: While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() 
// accepts an argument list, while apply() accepts a single array of arguments.
//********************************************************************************************************* */
// call()
// call() provides a new value of this to the function/method. With call, you can write a method once 
// and then inherit it in another object,
// without having to rewrite the method for the new objec
//****************************************************************************************************** */
// The call() allows for a function/method belonging to one object to be assigned and called for a different object.
// In this case the object Product is assigned and called from the Food object


function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Origin(countryOfOrigin) {
    this.countryOfOrigin = countryOfOrigin;
}
//this points to the object Product
function Food(name, price, countryOfOrigin) {
    Product.call(this, name, price);
    Origin.call(this, countryOfOrigin);
    //this.
}
var milch = new Food("Milch", 10, "Germany");

console.log(new Food('cheese', 5, "Turkey").name);
console.log(milch);


//******************************************************************************************* */
// apply()

// The apply() method calls a function with a given this value, 
// and arguments provided as an array (or an array-like object).

//Using apply to append an array to another
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]


//************************************************************************************************* */

//bind()
//The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
//with a given sequence of arguments preceding any provided when the new function is called.


var module = {
    x: 42,
    getX: function () {
        return this.x;
    }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42


//**************************************************************************************************** */

//Reusable Modules with Closures


var add = (function () {
    var counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
})();


add();
add();
add();
add();
console.log(add());

//setAge, setName, get info



var p = person('Peter', 25);
console.log(p);


var person = (function(age){
 return function(name){return name +', '+ age}

});
var p = person('Peter');
console.log(p(25));
