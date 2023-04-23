function createUser({ name: string, isPaid: boolean }) {}

function createCourse(): { name: string; price: number; haveCoupon: boolean } {
  return { name: "reactJS", price: 49, haveCoupon: false };
}

console.log(createCourse());

let newUser = { name: "Hiran", isPaid: true, email: "h2h@gmail.com" };

createUser(newUser);

type user = {
  name: string;
  age: number;
  isMarried: boolean;
};

function userFun(user: user): user {
  return { name: user.name, age: user.age, isMarried: user.isMarried };
}

console.log(userFun({ name: "Hiran", age: 22, isMarried: true }));
