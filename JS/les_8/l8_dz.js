
class Car {
    constructor (model, color, powerHP, year, price) {
        this.model = model;
        this.color = color;
        this.powerHP = powerHP;
        this.year = year;
        this.price = price;
    }

    info(){
        console.log(this);
    }

}


let Fabia = new Car('Fabia','red', 105, 2011, 8000);
let Lanos = new Car('Lanos','blue', 60, 2008, 4000);
let Cemri = new Car('Cemri','yellow', 120, 2014, 15000);
let AudiQ8 = new Car('AudiQ8','black', 180, 2016, 30000);
let Clio = new Car('Clio','pink', 90, 2010, 6000);


class SuperCar extends Car {
    constructor (model, color, powerHP, year, price, xeon, launch, maxSpeed) {
        super (model, color, powerHP, year, price);
        this.xeon = xeon;
        this.launch = launch;
        this.maxSpeed = maxSpeed;
    }
    
}

let Moseratti = new SuperCar('Moseratti','orange', 320, 2011, 35000, true, true, 290);
let Bentli = new SuperCar('Bentli','red', 420, 2015, 44000, true, true, 300);
let Bugatti = new SuperCar('Bugatti','white', 1200, 2018, 600000, true, true, 430);
let Supra = new SuperCar('Supra','blue', 400, 2008, 20000, true, false, 270);
let Dodge = new SuperCar('Dodge','black', 800, 2008, 22000, false, false, 300);


Fabia.info();

Moseratti.info();





