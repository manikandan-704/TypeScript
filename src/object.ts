//Object type alias

type students = {
    name: string;
    roll: number;
    grade?: string
}
const stu1: students = {
    name: "mani",
    roll: 28,
    grade: "A"
}
const stu2: students = {
    name: "isac",
    roll: 18
}
console.log(stu1.name);
console.log(stu2);

// readonly property

type Product = {
    readonly id: number;
    name: string;
    price: number
}
const product1: Product = {
    id: 2,
    name: "Laptop",
    price: 199.9
}
const product2: Product = {
    id: 3,
    name: "Laptop",
    price: 199.9
}
console.log(product2);
product1.name = "mobile";
console.log(product1);

//nested object

const Address: {
    name: string;
    address: {
        city: string;
        pincode: number
    }
} = {
    name: "Mani",
    address: {
        city: "madurai",
        pincode: 625050
    }
}
console.log(Address.address);

