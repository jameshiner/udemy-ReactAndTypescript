class Vehicle {
  // marking the field as public sets it on the class just like this.color = color
  constructor(public color: string) {}

  protected honk(): void {
    console.log('honk');
  }
}

class Car extends Vehicle {
  // no public on color bc we dont want to add color to the car class
  // just want to pass it to the parent class constructor
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('driving car');
  }
  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('green');
console.log(vehicle.color);

const car = new Car(4, 'yellow');

// if drive is private, cant call drive outside of the car class
// car.drive();
// since honk is protected, it can only be used in the parent or child classes
// car.honk();

// this works because this fucntion calls drive from inside the car class
// and calls honk from inside car which is a child class of the vehicle
car.startDriving();
