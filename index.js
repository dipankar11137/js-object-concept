// console.log(this);
const kibria = {
    id: 101,
    name: 'Rj Kibria',
    money: 5000,
    treatDayArrow: () => {
        console.log(this);
    },
    treatDayInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDay: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

function add() {
    console.log(this);
}