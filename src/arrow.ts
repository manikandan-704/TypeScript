const isEven = (num: number) => {

    if (num % 2 == 0) {
        return true;
    }
    return false
}
console.log(isEven(5));
console.log(isEven(6));

const arrStr: string[] = ["hi", "hello", "everyone"];
arrStr.map((str: string) => {
    console.log(str);
});

