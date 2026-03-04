// Oops - Object Oriented Programming Language
// Encapsulation
// Abstraction 
// Inheritance
// Polymorphism

class Student {
    constructor(public name: string, public age: number) { }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const stu = new Student("mani", 21);
console.log(stu.getDetails());