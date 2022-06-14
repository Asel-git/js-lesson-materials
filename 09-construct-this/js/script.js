// const user = {
//   name: "Aisha",
//   age: 7,
//   herName: function () {
//     console.log(this.name);
//   },
// };

// console.log(user.age);
// user.herName();

// *************************
// function Person(herName, age) {
//   this.herName = herName;
//   this.age = age;
// }

// const usuf = new Person("usuf", 10);
// const aisha = new Person("aisha", 7);
// const janar = new Person("janar", 39);
// const asel = new Person("asel", 40);

// console.log(usuf);
// console.log(aisha);
// console.log(janar);
// console.log(asel);
// **************************

// function Person(name, birthday) {
//   this.name = name;
//   this.birthday = new Date(birthday);
//   this.sayName = function () {
//     console.log(`Hello, my name is: ${this.name}`);
//   };
//   this.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return ageDate.getUTCFullYear() - 1970;
//   };
// }

// const usuf = new Person("usuf", "11-01-2011");
// const aisha = new Person("aisha", "1-19-2015");
// console.log(usuf.calculateAge());
// console.log(aisha.calculateAge());
// usuf.sayName();
// aisha.sayName();
// console.log(usuf.calculateAge === aisha.calculateAge);
// console.log(usuf);
// **********************************

// function Person(name, birthday) {
//   this.name = name;
//   this.birthday = new Date(birthday);
// }
// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return ageDate.getUTCFullYear() - 1970;
// };

// const usuf = new Person("usuf", "11-01-2011");
// const aisha = new Person("aisha", "1-19-2015");
// console.log(usuf);
// console.log(aisha.calculateAge());
// *******************************
// const myStr = "ggkg67;00653bnncj";
// const myStr2 = new String("ggkg67;00653bnncj");
// console.log(myStr);
// console.log(myStr2);
// *************************************

// const myStr = "Hello";
// console.log(myStr);

// console.log(myStr.toUpperCase());
// String.prototype.toUpperCase = function () {
//   console.log("5555555");
// };
// myStr.toUpperCase();
// **************************

function Auto(model, year, color, fuelLeft) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.fuelLeft = fuelLeft;
}
Auto.prototype.showInfo = function () {
  console.log(
    `Model: ${this.model},
	Year: ${this.year},
	Color: ${this.color},
	Fuelleft: ${this.fuelLeft}`
  );
};
Auto.prototype.drive = function (distance) {
  if (this.fuelLeft > 0) {
    this.fuelLeft -= 10;
  } else {
    console.log("No fuel left!");
  }
};
const bmw = new Auto("BMW", "2022", "black", 10);
bmw.showInfo();
bmw.drive();
bmw.showInfo();
bmw.drive();
