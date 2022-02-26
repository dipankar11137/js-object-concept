const kibria = {
    id: 101,
    name: 'Rj Kibria',
    money: 5000,
    treatDay: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
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
// call dia
// kibria.treatDay.call(heroBalam, 500, 30, 50);
// kibria.treatDay.call(heroBalam, 300, 20, 30);


kibria.treatDay.apply(heroBalam, [500, 100, 50]);
kibria.treatDay.apply(normalBalam, [700, 100, 70]);