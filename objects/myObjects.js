function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
function createCourse() {
    return { name: "reactJS", price: 49, haveCoupon: false };
}
console.log(createCourse());
var newUser = { name: "Hiran", isPaid: true, email: "h2h@gmail.com" };
createUser(newUser);
function userFun(user) {
    return { name: user.name, age: user.age, isMarried: user.isMarried };
}
console.log(userFun({ name: "Hiran", age: 22, isMarried: true }));
