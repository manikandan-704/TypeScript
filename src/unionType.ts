// Union "|"

let userId: number | string;
userId = "mani";
userId = 2;
console.log(userId);

//Union used in function

type Add = (val: string | number) => number
const check: Add = (val) => {
    if (typeof val === 'string') {
        return val.length;
    }
    else {
        return val.toString().length;
    }
}
console.log(check("manikandan"));
console.log(check(10000));

// created theme
type Theme = "light" | "dark"
let theme: Theme = "light"
const fun = (theme: Theme): void => {
    console.log(theme);
}
fun("dark");




