
// [노마드코더] 바닐라 JS로 크롬 앱 만들기

// 2.3 const and let

const a = 5;
const b = 2;

let myName = "daseul";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hello " + myName);

myName = "ds";

console.log("your new name is " + myName);

// 2.4 Booleans

const amIFat = null;
let something;
console.log(amIFat); // null : 비어있다
console.log(something); // undefined : 존재하지만, 안에 값이 없다

// 2.5 Arrays

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]

console.log(daysOfWeek);

// get item fro array
console.log(daysOfWeek[4]);

// add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

// 2.6 Objects

const player = {
    name: "daseul",
    points: 10,
    fat: false,
};
console.log(player);
console.log(player.name);
console.log(player["points"]);

// 수정
player.fat = true;
console.log(player);

// 추가
player.lastName = "potato";
console.log(player);

// 2.7~8 Functions

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
};

sayHello("nico", 10);
sayHello("daseul", 20);

const player2 = {
    name: "daseul",
    sayHello : function(otherName){
        console.log("hello " + otherName + " nice to meet you!")
    }
};

player2.sayHello("nico");

function plus(a, b){
    console.log(a+b);
}

function divide(a, b){
    console.log(a/b);
}

plus(1, 2);
divide(1, 2);

// 2.9~10 Recap

// 계산기 만들기

const calculator = {
    plus : function (a, b){
        return a+b;
    },
    
    minus : function (a, b){
        return a-b;
    },

    divide : function (a, b){
        return a/b;
    },

    powerOf: function (a, b){
        return a**b;
    }

}

console.log(calculator.plus(2, 5));
console.log(calculator.minus(2, 5));
console.log(calculator.divide(2, 5));
console.log(calculator.powerOf(2, 5));

// 2.11~12 Returns

const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

console.log(calculateKrAge(age));

// 2.13~16 Conditionals

// string을 number로 바꾸기 : parseInt()
// NaN인지 체크 : isNaN()
const inputAge = parseInt(prompt('How old are you?'));
console.log(isNaN(inputAge));

if (isNaN(inputAge) || inputAge < 0){
    console.log("Please write a real positive number");
}else if (inputAge < 18){
    console.log("You are too young");
}else if(inputAge >= 18 && inputAge <= 50){
    console.log("You can drink");
}
else if(inputAge > 50 && inputAge <= 80) {
    console.log("You should exercise");
}else if (inputAge === 100){
    console.log("wow you are wise")
}else if(inputAge > 80){
    console.log("You can do whatever you want")
}


