function addTwo(num) {
    return num;
}
console.log(addTwo(5));
var add = function (sum) {
    return "sum";
};
var players = ["Ms Dhoni", "Virat Kohli", "Ab De Villiers"];
var names = players.map(function (name) {
    return "all players ".concat(name);
});
console.log(names);
