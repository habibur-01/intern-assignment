class Car {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    showDetailsInfo() {
        console.log(`Car Information:\n${this.year} ${this.name} ${this.model}`);
    }
}

class ElectricCar extends Car {
    constructor(name, model, year, batteryCapacity) {
        super(name, model, year);
        this.batteryCapacity = batteryCapacity;
    }

    showDetailsInfo() {
        super.showDetailsInfo();
        console.log(`Battery Capacity: ${this.batteryCapacity} kWh`);
    }
}

class GasCar extends Car {
    constructor(name, model, year, fuelEfficiency) {
        super(name, model, year);
        this.fuelEfficiency = fuelEfficiency;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Fuel Efficiency: ${this.fuelEfficiency} MPG`);
    }
}

// Sample Input
const prompt = require("prompt-sync") ({sigint:true})
const carType = prompt("Enter car type (Electric/Gas):").toLowerCase();
const name = prompt("Enter Name:");
const model = prompt("Enter model:");
const year = prompt("Enter year:");

if (carType === "electric") {
    const batteryCapacity = prompt("Enter battery capacity (kWh):");
    const electricCar = new ElectricCar(name, model, year, batteryCapacity);
    electricCar.displayInfo();
} else if (carType === "gas") {
    const fuelEfficiency = prompt("Enter fuel efficiency (MPG):");
    const gasCar = new GasCar(name, model, year, fuelEfficiency);
    gasCar.displayInfo();
} else {
    console.log("Invalid car type");
}
