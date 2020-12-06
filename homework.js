window.onload = function() {
    var x = document.getElementById("main");
    x.style.color = '#6600FF';
    x.style.fontSize = '50px';
};

class Ranum {
    name;
    lastname;
    number;
    constructor(name,lastname,number){
        this.name = name;
        this.lastname = lastname;
        this.number = number;
    }
    static randomnum (number1){

    return Math.floor(Math.random()*number1.number)
    }
}
let p1 = new Ranum ("adiv","shenkor",1000);
Ranum.randomnum(p1)
console.log(Ranum.randomnum(p1));
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
