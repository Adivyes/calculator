// window.onload = function() {
//     var x = document.getElementById("main");
//     x.style.color = '#6600FF';
//     x.style.fontSize = '50px';
// };

// class Ranum {
//     name;
//     lastname;
//     number;
//     constructor(name,lastname,number){
//         this.name = name;
//         this.lastname = lastname;
//         this.number = number;
//     }
//     static randomnum (number1){

//     return Math.floor(Math.random()*number1.number)
//     }
// }
// let p1 = new Ranum ("adiv","shenkor",1000);
// Ranum.randomnum(p1)
// console.log(Ranum.randomnum(p1));
// class User1{
//     name;
//     password;
//     mail;
//     username;
//     constructor(name,password,mail,username){
//         this.name = name;
//         this.password = password;
//         this.mail = mail;
//         this.username = username;
//     }
// }

// let userArray = [
//     new User1 ('david',1234654,'david@gmail','david'),
//     new User1 ('adiv',1234,'adiv@gmail','shenkor'),
//     new User1 ('shalom',1234789,'shalom@gmail','shalomkan')
        
// ]


// function lookingForUser(name,password,mail,username){
//     for (let i = 0; i < userArray.length; i++) {    

//     if(userArray[i].name == name || userArray[i].password == password || 
//         userArray[i].mail == mail || userArray[i].username == username){
//         console.log('sorry not good');
//         return ;
//     }

// }

// userArray.push(new User1(name,password,mail,username))
// console.log('thank you') 
// }
// lookingForUser('karaso',1234654789,'davidkaraso@gmail','ksrasoshen')
// console.log(userArray);

// class Person {
//     name;
//     age;
//     hight;
//     constructor(name, age, hight) {
//         this.name = name;
//         this.age = age;
//         this.hight = hight;
//     }
//     talk() {
//         console.log(`hi im ${this.name} may age is ${this.age} and my hight is ${this.hight}`);
//     }
// }
// class Student extends Person {
//     grade;
//     school;
//     constructor(grade, school, name, age, hight) {
//         super(name, age, hight)
//         this.grade = grade;
//         this.school = school;
//     }
//     speak() {
//         super.talk()
//     }
// }
// const stu1 = new Student(7,"dsgfdsgd","Yossi", 16, 160);
// stu1.speak()


// static bestEngine(array1){
//     let max = 0;
//     let maxIndex = 0;
//     for (let i = 0; i < array1.length; i++) {
// if(array1[i].engine_capacity > max){
//     max = array1[i].engine_capacity;
//     maxIndex = i;
// }   
//     }
//     return array1[maxIndex];
// }

class Vehicles{
    engine_capacity;
    wheels_Number;
    color;
    constructor(engine_capacity,wheels_Number,color){
        this.engine_capacity = engine_capacity;
        this.wheels_Number = wheels_Number;
        this.color = color;
    }
static bestEngine(array1){
let max = 0;
let maxIndex = 0;
for (let i = 0; i < array1.length; i++) {
    if(array1[i].engine_capacity > max){
        max = array1[i].engine_capacity;
        maxIndex = i;
    }
}
return array1[maxIndex];
}
    printreturn(){
        return `this vehicle have engine capacity of: ${this.engine_capacity}/n  with the number of wheels of:  ${this.wheels_Number}/n and have the color: ${this.colorw}`;
    }
}
class Car extends Vehicles{
    company;
    name;
    constructor(company,name,engine_capacity,wheels_Number,color){
        super(engine_capacity,wheels_Number,color);
        this.company = company;
        this.name = name;
    }
    get lettersBig(){
        return this.bigLetters();
    }

    bigLetters(){
       return this.company.toUpperCase()
    }
    printCar(){
        return `the name of the company is: ${this.company}/n and ${super.printreturn()}`;
    }
}
class Truck extends Vehicles{
    size;
    constructor(size,engine_capacity,wheels_Number,color){
        super(engine_capacity,wheels_Number,color);
        this.size = size;
    }
    printTruck(){
        return `the kind of this truck is ${this.size}/n and ${super.printreturn()}`;
    }
}
class Motorcicel extends Vehicles{
    gears_type;
    constructor(gears_type,engine_capacity,wheels_Number,color){
        super(engine_capacity,wheels_Number,color)
        this.gears_type = gears_type
    }
    printMotorcicel(){
        return `the gear type of this vehicles is ${this.gears_type}/n and ${super.printreturn()}`;
    }
}
let prinItMotor = new Motorcicel('auto',225,2,'red');
let prinItTruck = new Truck('semi triler',6000,12,'black');
let prinItCar = new Car('toyota',1400,4,'blue');




console.log(Vehicles.bestEngine([prinItMotor,prinItTruck,prinItCar]));
let trIndex = 0;
function newTable(){
    // console.log(Wheels.value)
    // console.log(Capacity.value)
    // console.log(color.value)
    // console.log(Name.value)
    // console.log(selectedId.value)

    let carObj = new Car (selectedId.value,Name.value,Capacity.value,Wheels.value,color.value) //לא לשכוח להתאים את הערכים בפונקציה לקלאסים שייצרנו שיהיה אחד לאחד שיעבוד לי הכל בסוף
   
   
    let trId = `trId${trIndex++}`
    tabelId.innerHTML += `<tr id = ${trId}></tr>`
    for(const key in carObj) {
document.getElementById(trId).innerHTML += `<td>${carObj[key]}</td>`
}

document.getElementById(trId).innerHTML += `<td>${selectedId.value}</td>`
}