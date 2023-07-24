// callback = function inside another function

function sum (num1, num2) {
    return num1 + num2;
};

function calc (num1, num2, sumNumbers) {
    return sumNumbers(num1, num2);
};

console.log(calc(2, 1, sum));

// seTimeOut

setTimeout(function () {
    console.log('Hello JS')
}, 2000);

// creating a real function, because the above function is anonymous

function greeting (name) {
    console.log(`hello ${name}, how are you?`)
}

greeting('Lau');

setTimeout(greeting, 2000, 'Jason'); // setTimeout is a callback