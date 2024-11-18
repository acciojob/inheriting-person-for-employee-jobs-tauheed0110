// complete this js code
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

class Employee extends Person{
    constructor(name, age, jobtitle){
        super(name, age);
        this.jobtitle = jobtitle;
    }
    jobGreet(){
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobtitle}.`);
    }
}

// Do not change code below this line
const person = new Person("Tauheed", 24);
person.greet();
const employee= new Employee("Shama Khan", 19, "Intern");
employee.jobGreet();
window.Person = Person;
window.Employee = Employee;
