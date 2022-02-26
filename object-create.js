// 1. using object literral
const sutdent = { name: 'Sakib Al HAsan', job: 'cricketer' };

// 2. constructor
const person = new Object();

// 3.
// const human = Object.create(null);
const human = Object.create(sutdent);
// console.log(human.job);


// 4. Class dia make
/*
 class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manush', 12);
console.log(peop); 
*/


// function
function Manush(name) {
    this.name = name;
}
const man = new Manush('kader');
console.log(man);