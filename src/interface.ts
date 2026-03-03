//Interface

interface Students {
    name: string;
    roll: number;
    grade?: string
}

const stu1: Students = {
    name: "mani",
    roll: 28
}
const stu2: Students = {
    name: "isac",
    roll: 22
}
console.log(stu2);

//Interface Extends

interface vehicle {
    brand: String;
    speed: Number
}
interface car extends vehicle {
    fuleType: String
}
const l1: car = {
    brand: "Audi",
    speed: 200,
    fuleType: "Diesel"
}

const l2: vehicle = {
    brand: "Audi",
    speed: 200,
}
console.log(l2);
console.log(l1);

//Function in interface

interface Word {
    (val: string): boolean;
}
const find: Word = (value) => {
    return value.length > 5;
}
console.log(find("mani"));

