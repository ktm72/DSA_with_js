const data = [
  {
    serviceCode: "BS01",
    service: "Basic Servicing",
    Hatchback: 2000,
    Sedan: 4000,
    SUV: 5000,
  },
  {
    serviceCode: "EF01",
    service: "Engine Fixing",
    Hatchback: 5000,
    Sedan: 8000,
    SUV: 10000,
  },
  {
    serviceCode: "CF01",
    service: "Clutch Fixing",
    Hatchback: 2000,
    Sedan: 4000,
    SUV: 6000,
  },
  {
    serviceCode: "BF01",
    service: "Brake Fixing",
    Hatchback: 1000,
    Sedan: 1500,
    SUV: 2500,
  },
  {
    serviceCode: "GF01",
    service: "Gear Fixing",
    Hatchback: 3000,
    Sedan: 6000,
    SUV: 8000,
  },
];

class CarService {
  #carType;
  #serviceCodes;
  constructor(carType) {
    this.#carType = carType;
  }
  addService(serviceCodes) {
    this.#serviceCodes = serviceCodes;
  }
  total() {
    let total = 0;
    if (this.#serviceCodes.length <= 0) {
      console.log("Please, Add a service");
      return;
    }
    for (let i = 0; i < this.#serviceCodes.length; i++) {
      const code = data.find((s) => s.serviceCode === this.#serviceCodes[i]);
      total += code[this.#carType];
      console.log(`Charges for ${code.service} - ₹${code[this.#carType]}`);
    }
    if (total > 10000) {
      console.log(`Cleaning provided`);
    }
    console.log(`Total Bill - ₹${total}`);
  }
}
const carService = new CarService("SUV");
carService.addService(["BS01", "GF01"]);
carService.total();
