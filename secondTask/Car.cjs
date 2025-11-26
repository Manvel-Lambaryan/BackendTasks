class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `Car Brand -> ${this.brand}. Car Model -> ${this.model}. Car Year -> ${this.year}`;
  }

  drive() {
    return `${this.brand} ${this.model} is drived:`;
  }
}

module.exports = Car;
