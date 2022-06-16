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

class Restaurant {
  constructor(name, cusineType) {
    this.name = name;
    this.cusineType = cusineType;
  }
  showInfo() {
    return `${this.name} is a restaurant ${this.cusineType} meal!`;
  }
  isOPen() {
    let currentHour = new Date().getHours();
    let currentDay = new Date().getDay;
    // console.log(currentHour);

    if (currentDay === 6 || currentDay === 0) {
      return `${this.name} is closed`;
    } else {
      if (currentHour > 9 && currentHour < 22) {
        return `${this.name} is open`;
      } else {
        return `${this.name} is closed`;
      }
    }
  }
}
const beshBarmak = new Restaurant(" Besh Barmak", "Kyrgyz");
console.log(beshBarmak.showInfo());
console.log(beshBarmak.isOPen());
