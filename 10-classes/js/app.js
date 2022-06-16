// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greet() {
//     return `Hello, ${this.firstName} ${this.lastName} nice to meet you!`;
//   }
// }
// class Client extends Person {
//   constructor(firstName, lastName, email, city) {
//     super(firstName, lastName);
//     this.email = email;
//     this.city = city;
//   }
//   greet() {
//     return super.greet() + ` I am from ${this.city}`;
//   }
//   //   greet() {
//   //     return `${this.firstName} Email: ${this.email}`;
//   //   }
// }

// const aisha = new Person("Aisha", "Tulaganova");
// console.log(aisha.greet());

// const usuf = new Client("Usuf", "Tulaganov", "usuf@com", "Bishkek");
// console.log(usuf.greet());
// **************************************
// console.log(aisha.greet());
// console.log(aisha.greet === usuf.greet);
// **************************************************************************
// Exercise - 1
// class Restaurant {
//   constructor(name, cuisineType, served = 0) {
//     this.name = name;
//     this.cuisineType = cuisineType;
//     this.served = served;
//   }
//   showInfo() {
//     return `${this.name} is a restaurant ${this.cusineType} meal!`;
//   }
//   serve() {
//     return this.served++;
//   }
//   setServed(amountServed) {
//     this.served += amountServed;
//   }
//   showTotalServed() {
//     return `Total number of ${this.served} visitors served!`;
//   }

//   isOPen() {
//     let currentHour = new Date().getHours();
//     let currentDay = new Date().getDay;
//     // console.log(currentHour);

//     if (currentDay === 6 || currentDay === 0) {
//       return `${this.name} is closed`;
//     } else {
//       if (currentHour > 9 && currentHour < 22) {
//         return `${this.name} is open`;
//       } else {
//         return `${this.name} is closed`;
//       }
//     }
//   }
// }
// const beshBarmak = new Restaurant(" Besh Barmak", "Kyrgyz");
// const doyumKebap = new Restaurant(" Doyum kebap", "Turkish");
// console.log(beshBarmak.showInfo());
// console.log(beshBarmak.isOPen());
// console.log(beshBarmak.serve());
// console.log(beshBarmak.showTotalServed());
// console.log(beshBarmak.setServed(50));
// console.log(beshBarmak.showTotalServed());

// console.log(doyumKebap.serve());
// console.log(doyumKebap.showTotalServed());
// console.log(doyumKebap.setServed(30));
// console.log(doyumKebap.showTotalServed());
