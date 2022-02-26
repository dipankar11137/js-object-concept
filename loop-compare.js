/* 
for(let i=0;i<10;i++){}
for(const num of numbers){} //array
for(const prop in student){} // Object
*/

const student = {
    id: 101,
    name: 'Rj Kibria',
    money: 5000,
    mejor: 'Mathematics',
    isRich: false,
    subjects: ['english', 'economices', 'math 101', 'calculus'],
    bestFriend: {
        name: 'Kundu',
        mejor: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDay: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

for (const prop in student) {
    // console.log(prop, ' :', student[prop]);
}


const keys = Object.keys(student);
// console.log(keys);
for (const prop of keys) {
    console.log(prop, student[prop]);
}


// Advance
const entries = Object.entries(student);
// console.log(entries);

for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
} 