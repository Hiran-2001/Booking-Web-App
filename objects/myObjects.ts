// function createUsers({ name: string, isPaid: boolean }) {}

// function createCourses(): { name: string; price: number; haveCoupon: boolean } {
//   return { name: "reactJS", price: 49, haveCoupon: false };
// }

// console.log(createCourse());

// let newUserData = { name: "Hiran", isPaid: true, email: "h2h@gmail.com" };

// createUser(newUser);

// type user = {
//   name: string;
//   age: number;
//   isMarried: boolean;
// };

// function userFunc(user: user): user {
//   return { name: user.name, age: user.age, isMarried: user.isMarried };
// }

// console.log(userFun({ name: "Hiran", age: 22, isMarried: true }));


type user = {
   readonly _id : string,
    name:string,
    age:number,
    accountNumber:number
}

let newUser : user =  {
    _id :"165546",
    name : "hiran",
    age:21,
    accountNumber:65498465116544964
}

// newUser._id = 879498498

console.log(newUser);


export {}