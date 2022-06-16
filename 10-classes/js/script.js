class Cars {
  constructor(model, year, enginePower, color) {
    this.model = model;
    this.year = year;
    this.enginePower = enginePower;
    this.color = color;
  }
  outputInfo() {
    return `${this.model} consists of the following qualities: model: ${this.model},
	year: ${this.year}, enginePower: ${this.enginePower}, color: ${this.color}`;
  }
}

class ElectroCars extends Cars {
  constructor(model, year, enginePower, color, batteryCapacity) {
    super(model, year, enginePower, color);
    this.batteryCapacity = batteryCapacity;
  }
  outputInfo() {
    return super.outputInfo() + `, batteryCapacity: ${this.batteryCapacity}`;
  }
  promote() {
    return `This car "${this.model}" is for Rent or for Sale`;
  }
}
const tayota = new Cars("Tayota", 2021, 100, "black");
console.log(tayota.outputInfo());
const lexus = new ElectroCars("Lexus", 2020, 200, "white", 500);
console.log(lexus.outputInfo());
console.log(lexus.promote());
