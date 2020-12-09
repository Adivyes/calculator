// 
class Vehicles {
    engine_capacity;
    wheels_Number;
    color;
    vehicle;
    constructor(engine_capacity, wheels_Number, color, vehicle) {
        this.engine_capacity = engine_capacity;
        this.wheels_Number = wheels_Number;
        this.color = color;
        this.vehicle = vehicle;
    }
    static bestEngine(array1) {
        let max = 0;
        let maxIndex = 0;
        for (let i = 0; i < array1.length; i++) {
            if (array1[i].engine_capacity > max) {
                max = array1[i].engine_capacity;
                maxIndex = i;
            }
        }
        return array1[maxIndex];
    }
    printreturn() {
        return `this ${this.vehicle} have engine capacity of: ${this.engine_capacity}/n  with the number of wheels of:  ${this.wheels_Number}/n and have the color: ${this.color}`;
    }
}
class Car extends Vehicles {
    name;
    constructor(name, engine_capacity, wheels_Number, color, vehicle) {
        super(engine_capacity, wheels_Number, color, vehicle);

        this.name = name;
    }
    get lettersBig() {
        return this.bigLetters();
    }

    bigLetters() {
        return this.company.toUpperCase()
    }
    printCar() {
        return `the name of the vehicle is: ${this.name}/n and ${super.printreturn()}`;
    }
}
class Truck extends Vehicles {
    name;
    constructor(name, engine_capacity, wheels_Number, color, vehicle) {
        super(engine_capacity, wheels_Number, color, vehicle);
        this.name = name;
    }
    printTruck() {
        return `the kind of this ${this.vehicle} is ${this.name}/n and ${super.printreturn()}`;
    }
}
class Motorcicel extends Vehicles {
    name;
    constructor(name, engine_capacity, wheels_Number, color, vehicle) {
        super(engine_capacity, wheels_Number, color, vehicle)
        this.name = name
    }
    printMotorcicel() {
        return `the name  of this ${this.vehicle} is ${this.name}/n and ${super.printreturn()}`;
    }
}
let prinItMotor = new Motorcicel('kawasaki', 225, 2, 'red', 'motorcicel');
let prinItTruck = new Truck('isuzu', 6000, 20, 'black', 'truck');
let prinItCar = new Car('toyota', 1400, 4, 'blue', 'car');

//console.log(prinItMotor.printMotorcicel());

//console.log(Vehicles.bestEngine([prinItMotor, prinItTruck, prinItCar]));


let trIndex = 0;
function newTable() {
    const userObj = getVihecaleNum(selectedId.value);
    console.log(userObj);
    let trId = `trId${trIndex++}`;
    tabelId.innerHTML += `<tr id = ${trId}></tr>`
    for (const key in userObj) {
        document.getElementById(trId).innerHTML += `<td>${userObj[key]}</td>`
    }
}
function getVihecaleNum(params) {
    switch (params) {
        case "Car":
            return new Car(selectedId.value, Name.value, Capacity.value, Wheels.value, color.value)

        case "Truck":
            return new Truck(selectedId.value, Name.value, Capacity.value, Wheels.value, color.value)

        case "Motorcicel":
            return new Motorcicel(selectedId.value, Name.value, Capacity.value, Wheels.value, color.value)

    }
}

//let row = 1;

// function displayDetails(){
//     let vihecal = document.getElementById ('Vehicale').value;
//     let engineCapac = document.getElementById ('Engine').value;
//     let color = document.getElementById ('Color').value;
//     let wheel =document.getElementById ('Wheels').value;
//     if(!vihecal || !engineCapac || !color || !wheel){
//         alert('not good');
//         return
//     }
//     let dispaly1 = document.getElementById('display');
//     let newRow = dispaly1.insertRow(row);
    
//     let cell1 = newRow.insertCell(0);
//     let cell2 = newRow.insertCell(1);
//     let cell3 = newRow.insertCell(2);
//     let cell4 = newRow.insertCell(3);

//     cell1.innerHTML = vihecal;
//     cell2.innerHTML = engineCapac;
//     cell3.innerHTML = color;
//     cell4.innerHTML = wheel;

//     row++;

// }