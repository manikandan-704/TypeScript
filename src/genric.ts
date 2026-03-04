//Genric in function

const Gen = <T>(val: T): T => {
    return val
}
console.log(Gen<string | number>("hello"));

const arr = <U>(a: U[]): void => {
    console.log(a[a.length - 1]);
}

arr<number>([1, 2, 3, 4, 5]);
arr(["hi", "hello", "bye"]); 
