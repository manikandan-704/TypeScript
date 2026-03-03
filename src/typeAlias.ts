//Type Alias for function

type func=(a:string)=>number

const f1:func=(a)=>{
    return a.length;
}
console.log(f1("mani"));

// Array

type arr = number[]
const arr1:arr=[1,2,3,4,5];
console.log(arr1);

// object

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



