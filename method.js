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
student.takeExam();
// console.log(student.name);

const remainning = student.treatDay(500, 20);
const remainning1 = student.treatDay(500, 30);
const remainning2 = student.treatDay(400, 50);
console.log(remainning, remainning1, remainning2);