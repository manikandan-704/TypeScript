function calcu(a: number, b: number): number {
    return a / b;
}
console.log(calcu(10, 2));

function Len(word: string): number {
    return word.length;
}
console.log(Len("Mani"));

// function type

type words = (word: string) => number
let one: words = (word) => word.length
let two: words = (word) => word.length;
console.log(two("manikandan"));
console.log(one("hello"))



