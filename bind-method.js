const kibria = {
    id: 101,
    name: 'Rj Kibria',
    money: 5000,
    treatDay: function (expense) {
        this.money = this.money - expense;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    name: 'Hero Balam',
    money: 4000

}
const normalBalam = {
    id: 102,
    name: 'Normal Balam',
    money: 7000

}

kibria.treatDay(100);

const heroTreatDay = kibria.treatDay.bind(heroBalam);
heroTreatDay(500);
const normalTreatDay = kibria.treatDay.bind(normalBalam);
normalTreatDay(200);